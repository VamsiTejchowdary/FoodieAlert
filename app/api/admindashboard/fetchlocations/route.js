import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/locations";
import User from "@/models/user";

export async function GET(request) {
  try {
    // Establish connection to MongoDB
    await connectMongoDB();

    let locations = []; // Initialize locations as an empty array

    // Fetch all approved users
    const approvedUsers = await User.find({ status: "approved" });

    // If no approved users are found, return a response with a 400 status
    if (approvedUsers.length === 0) {
      return new Response(
        JSON.stringify({
          message: "No approved users found.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Get the list of approved user ids (business owner ids)
    const approvedUserIds = approvedUsers.map((user) => user._id);

    // Fetch locations where the business_id matches the approved user ids
    const approvedLocations = await Location.find({
      business_id: { $in: approvedUserIds },
    });

    // Add the business owner's name and email to each location
    locations = approvedLocations.map((location) => {
      const businessUser = approvedUsers.find(
        (user) => user._id.toString() === location.business_id.toString()
      );
      return {
        ...location._doc,
        businessPersonName: businessUser?.name, // Business owner's name
        businessEmail: businessUser?.email, // Business owner's email
      };
    });

    // Log the filtered locations for debugging
    //console.log("Filtered locations:", locations);

    // Return the filtered locations in the response
    return new Response(
      JSON.stringify({ locations }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error while fetching locations:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while fetching locations.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}