import Customer from "@/models/customers"; // Import customers model
import CustomerLocation from "@/models/customerslocations"; // Import CustomerLocations model
import { connectMongoDB } from "@/lib/mongodb"; // Import MongoDB connection function

export async function POST(req) {
  try {
    const { name, phone, email, favfood, code, location_id } = await req.json();

    // Connect to the database
    await connectMongoDB();

    // Check if customer already exists
    let customer = await Customer.findOne({ email });

    if (!customer) {
      // Create a new customer if not found
      customer = await Customer.create({ name, phone, email, favfood });
    }

    // Check if the customer has already subscribed to the given location
    const existingSubscription = await CustomerLocation.findOne({
      customer_id: customer._id,
      location_id,
    });

    if (existingSubscription) {
      // If the subscription exists but is unsubscribed, update it
      if (!existingSubscription.subscription) {
        existingSubscription.subscription = true;
        existingSubscription.code = code; // Update the code, if applicable
        await existingSubscription.save();

        return new Response(
          JSON.stringify({
            message: "Subscription reactivated successfully.",
            customer,
            locationCustomer: existingSubscription,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }

      // If the subscription is active, return an error
      return new Response(
        JSON.stringify({ message: "Customer already subscribed to this location." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create a new location subscription for the customer
    const locationCustomer = await CustomerLocation.create({
      location_id: location_id,
      customer_id: customer._id,
      code: code,
      subscription: true, // Ensure subscription is active
    });

    // Return a success response
    return new Response(
      JSON.stringify({
        message: "Customer subscribed successfully.",
        customer,
        locationCustomer,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);

    // Return an error response
    return new Response(
      JSON.stringify({
        message: "An error occurred while subscribing.",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}