// app/api/send-alert/route.js
import { connectMongoDB } from "@/lib/mongodb"; // MongoDB connection function
import Message from "@/models/messages"; // Import your Message model
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Destructure the necessary fields from the request body
    const { location_id, message, in_time, out_time, business_id } = await req.json();
   console.log("Here in api Alert data:", location_id, business_id, message, in_time, out_time);
    // Connect to MongoDB
    await connectMongoDB();

    // Create a new alert message in the database
    const newMessage = await Message.create({
      business_id, // Link to business (user's ID)
      location_id, // Location ID (from the dropdown)
      message: message || "Get Ready for the yummy taste.", // Alert message
      time_from: in_time, // In-time
      time_to: out_time, // Out-time
    });

    // Return a success response
    return NextResponse.json({ message: "Alert sent successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while sending the alert." },
      { status: 500 }
    );
  }
}