import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/locations";
import CustomerLocation from "@/models/customerslocations";

export async function GET(request) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Parse the request URL to extract the `business_id` query parameter
    const url = new URL(request.url);
    const business_id = url.searchParams.get("business_id");

    if (!business_id) {
      return new Response(
        JSON.stringify({ message: "Missing business_id parameter." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Fetch locations based on business_id and active status
    const locations = await Location.find({
      business_id,
      activestatus: true,
    });

    // For each location, fetch customer count where subscription is true
    const locationsWithCustomerCount = await Promise.all(locations.map(async (location) => {
      // Get customer count for the location where subscription is true
      const customerCount = await CustomerLocation.countDocuments({
        location_id: location._id,
        subscription: true,
      });

      // Add customer count to the location object
      return { ...location.toObject(), customerCount };
    }));
   // console.log(locations);

    return new Response(
      JSON.stringify({ locations: locationsWithCustomerCount }),
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