import Location from '@/models/locations';  // Import Location model
import { connectMongoDB } from "@/lib/mongodb"; // Import MongoDB connection function

export async function GET(request) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Fetch all locations from the database
    const locations = await Location.find();

    // Send locations as a response
    return new Response(
      JSON.stringify({ locations }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "An error occurred while fetching locations." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}