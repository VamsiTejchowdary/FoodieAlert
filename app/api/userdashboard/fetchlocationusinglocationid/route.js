import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/locations"; // Assuming you have a Location model
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    console.log("Here in location fetching");

    // Extract selectedLocation from the request body
    const { selectedLocation } = await req.json();
    console.log("Selected Location:", selectedLocation);

    // Find the locations using the provided location IDs
    const locations = await Location.find({ _id: { $in: selectedLocation } });

    console.log("Found locations:", locations);

    // Return the locations or a not found response
    if (locations.length > 0) {
      return NextResponse.json({ locations });
    } else {
      return NextResponse.json({ message: "Locations not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error in fetching locations:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching locations", error: error.message },
      { status: 500 }
    );
  }
}