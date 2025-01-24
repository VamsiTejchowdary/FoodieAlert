import { connectMongoDB } from "@/lib/mongodb"; // Your MongoDB connection helper
import LocationCustomer from "@/models/customerslocations";// LocationCustomer model
import Customer from "@/models/customers"; // Customer model
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB(); // Connect to MongoDB

    // Extract location_id from the request body
    const { location_id } = await req.json();
    //console.log("Location ID:", location_id);

    // Find all customers for the given location_id and subscription is true
    const locationCustomers = await LocationCustomer.find({
      location_id,
      subscription: true, // Only consider customers with active subscriptions
    });

    // Check if there are any matching locationCustomers
    if (locationCustomers.length > 0) {
      // Extract customer_ids from locationCustomers
      const customerIds = locationCustomers.map((locCustomer) => locCustomer.customer_id);

      // Find the customers by customer_ids
      const customers = await Customer.find({
        _id: { $in: customerIds }, // Match customer_ids
      }).select("email phone");  // Only select the email field

      // Extract emails from the customers
      const customerEmails = customers.map((customer) => customer.email);
      const phone = customers.map((customer) => customer.phone);

      //console.log("Customer Emails:", customerEmails);

      return NextResponse.json({ emails: customerEmails, phones: phone }, { status: 200 });
    } else {
      return NextResponse.json({ message: "No subscribed customers found for this location" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error in fetching customer emails:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching customer emails", error: error.message },
      { status: 500 }
    );
  }
}