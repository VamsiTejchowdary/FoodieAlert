import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/locations";

export async function POST(request) {
  try {
    // Parse the request body
    const { id, adminstatus } = await request.json();

    // Check if the id and status are provided
    if (!id || !adminstatus) {
      return new Response(
        JSON.stringify({
          message: "Location ID and admin status are required.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Establish connection to MongoDB
    await connectMongoDB();

    // Find the location by id
    const location = await Location.findById(id);

    if (!location) {
      return new Response(
        JSON.stringify({
          message: "Location not found.",
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Update the location's status
    location.adminstatus = adminstatus;

    // Save the updated location
    await location.save();

    return new Response(
      JSON.stringify({
        message: "Location status updated successfully.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error while updating location status:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while updating the location status.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}