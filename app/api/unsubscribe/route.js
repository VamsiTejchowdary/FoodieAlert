import { connectMongoDB } from "@/lib/mongodb";
import LocationCustomer from "@/models/customerslocations";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    
    const { customer_id, location_id, code } = await req.json();
    
    console.log("Unsubscribing customer:", customer_id, location_id, code);
    // Find the matching LocationCustomer document
    const locationCustomer = await LocationCustomer.findOne({
      customer_id,
      location_id,
      code
    });

    if (!locationCustomer) {
      return NextResponse.json(
        { message: "No matching subscription found." },
        { status: 404 }
      );
    }

    // Update the subscription field to false
    locationCustomer.subscription = false;
    await locationCustomer.save();

    return NextResponse.json({ message: "Unsubscribed successfully." });
  } catch (error) {
    console.error("Error in unsubscribing:", error);
    return NextResponse.json(
      { message: "Error occurred while unsubscribing." },
      { status: 500 }
    );
  }
}