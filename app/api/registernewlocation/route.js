import { connectMongoDB } from "@/lib/mongodb";
import Location from '@/models/locations'; 
import { NextResponse } from "next/server"; // Import MongoDB connection function

export async function POST(req) {
  try {
    const { businessName, businessAddress, userId } = await req.json();

    // Connect to MongoDB
    await connectMongoDB();
    
    const location = await Location.create({
      business_id: userId, // Link location to the newly created user
      name: businessName, // Use business_name here
      address: businessAddress,
    });

    return NextResponse.json(
      { message: "User and location registered.", userId, location_id: location._id },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while registering the user or location." },
      { status: 500 }
    );
  }
}