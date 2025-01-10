import { connectMongoDB } from "@/lib/mongodb";
import LocationCustomer from "@/models/customerslocations";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();

    // Extract customerId from the request
    const { customerId } = await req.json();

    // Find all location IDs associated with the customerId
    const locations = await LocationCustomer.find({
        customer_id: customerId,
        subscription: true, // Ensure subscription is true
      }).select("location_id");

    // Check if any locations are found
    if (locations.length > 0) {
      const locationIds = locations.map((location) => location.location_id);
      return NextResponse.json({ locationIds });
    } else {
      return NextResponse.json({ message: "No locations found for the provided customer ID" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error in fetching locations:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching locations", error: error.message },
      { status: 500 }
    );
  }
}