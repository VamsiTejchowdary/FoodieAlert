import Customer from "@/models/customers"; // Import customers model
import CustomerLocation from "@/models/customerslocations"; // Import CustomerLocations model
import { connectMongoDB } from "@/lib/mongodb"; // Import MongoDB connection function

export async function POST(req) {
  try {
    const { name, phone, email, favfood, code, location_id } = await req.json();

    // Connect to the database
    await connectMongoDB();

    // Log the incoming data for debugging
    console.log("name: ", name);
    console.log("phone: ", phone);
    console.log("email: ", email);
    console.log("location_id: ", location_id);
    console.log("customercode and  code type: ", code + typeof(code));

    // Create a new customer
    const customer = await Customer.create({ name, phone, email, favfood });

    
    // Link the customer to the location
    const locationCustomer = await CustomerLocation.create({
      location_id: location_id,
      customer_id: customer._id,
      code: code,
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