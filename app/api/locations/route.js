import { connectMongoDB } from "@/lib/mongodb";
import Customer from "@/models/customers";
import CustomerLocation from "@/models/customerslocations";
import Location from "@/models/locations";

export async function GET(request) {
  try {
    await connectMongoDB();

    const url = new URL(request.url);
    const email = url.searchParams.get("email"); // Get the email of the customer

    let locations = []; // Initialize locations as an empty array

    if (email) {
      // Fetch the customer by email
      const customer = await Customer.findOne({ email });
      console.log("Fetched customer:", customer);

      if (customer) {
        // Fetch all `CustomerLocation` records for the customer
        const customerLocations = await CustomerLocation.find({
          customer_id: customer._id,
        });

        // Get all location IDs where subscription is true
        const excludedLocationIds = customerLocations
          .filter((cl) => cl.subscription === true)
          .map((cl) => cl.location_id.toString());

        // Fetch locations where:
        // 1. There is no record in `CustomerLocation` (not registered).
        // 2. There is a record but `subscription` is `false`.
        const availableLocations = await Location.find({
          $and: [
            {
              $or: [
                { _id: { $nin: customerLocations.map((cl) => cl.location_id) } }, // Not registered
                { _id: { $in: customerLocations.filter((cl) => !cl.subscription).map((cl) => cl.location_id) } }, // Registered but unsubscribed
              ],
            },
            { adminstatus: "approved" }, // Only approved locations
          ],
        });

        // Add these locations to the response
        locations = availableLocations.map((location) => ({
          ...location._doc,
        }));
      } else {
        console.log("No customer found for the given email.");
        // If no customer is found, show all approved locations
        const allApprovedLocations = await Location.find({
          adminstatus: "approved", // Only approved locations
        });

        locations = allApprovedLocations.map((location) => ({
          ...location._doc,
        }));
      }
    } else {
      // If no email is provided, show all approved locations
      const allApprovedLocations = await Location.find({
        adminstatus: "approved", // Only approved locations
      });

      locations = allApprovedLocations.map((location) => ({
        ...location._doc,
      }));
    }

    console.log("Filtered locations:", locations);

    return new Response(
      JSON.stringify({ locations }), // Return only filtered locations
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error while fetching locations:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while fetching locations.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}