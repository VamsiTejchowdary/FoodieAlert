import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/locations";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Connect to the MongoDB database
    await connectMongoDB();

    // Parse the request body
    console.log("Here in grouplocationids fetching");
    const { locationIds } = await req.json();

    // Validate the input
    if (!locationIds || !Array.isArray(locationIds)) {
      return NextResponse.json(
        { success: false, message: "Invalid or missing locationIds array." },
        { status: 400 }
      );
    }

    // Fetch the location details
    const locations = await Location.find({ _id: { $in: locationIds } });

    // Return the response with the fetched locations
    return NextResponse.json({ success: true, locations });
  } catch (error) {
    console.error("Error fetching location details:", error);

    // Handle errors gracefully
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching location details." },
      { status: 500 }
    );
  }
}