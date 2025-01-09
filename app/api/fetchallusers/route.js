import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

// This API will fetch all users from the database
export async function GET(req) {
  try {
    await connectMongoDB();
    // Fetch all users from the database
    const users = await User.find();

    // If no users found, return an empty array
    if (!users || users.length === 0) {
      return NextResponse.json({ users: [] });
    }

    // Return the list of users
    return NextResponse.json({ users });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred while fetching users." }, { status: 500 });
  }
}