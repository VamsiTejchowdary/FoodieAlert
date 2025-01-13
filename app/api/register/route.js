import { connectMongoDB } from "@/lib/mongodb";
import Location from '@/models/locations'; // Import Location model
import User from "@/models/user";
import { NextResponse } from "next/server"; // Import MongoDB connection function

export async function POST(req) {
  try {
    const { name, email, password, number, passcode , businessName, businessAddress,messageChannel } = await req.json();

    // Connect to MongoDB
    await connectMongoDB();
    
    const user = await User.create({ name, email, number, password, passcode });

    // Access the user_id (which is the _id field)
    const user_id = user._id;

    // Create a location associated with the user (business owner)
    const location = await Location.create({
      business_id: user_id, // Link location to the newly created user
      name: businessName, // Use business_name here
      address: businessAddress,
      messagechannel: messageChannel,
    });

    return NextResponse.json(
      { message: "User and location registered.", user_id, location_id: location._id },
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