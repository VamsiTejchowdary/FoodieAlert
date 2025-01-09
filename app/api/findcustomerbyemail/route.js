import { connectMongoDB } from "@/lib/mongodb";
import Customer from "@/models/customers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    console.log("Here in customer fetching");

    // Extract and transform email to lowercase
    const { email } = await req.json();
    const normalizedEmail = email.toLowerCase(); // Transform email to lowercase

    // Find the customer using the normalized email
    const customer = await Customer.findOne({ email: normalizedEmail });
    console.log("Here in customer fetching:", customer);

    // Return the customer details or a not found response
    if (customer) {
      return NextResponse.json({ customer });
    } else {
      return NextResponse.json({ message: "Customer not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error in fetching customer:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching the customer", error: error.message },
      { status: 500 }
    );
  }
}