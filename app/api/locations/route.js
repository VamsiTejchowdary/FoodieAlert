import Location from '@/models/locations';  // Import Location model
import { connectMongoDB } from "@/lib/mongodb"; // Import MongoDB connection function

export async function GET(request) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Parse the query parameters from the request URL
    const url = new URL(request.url);
    const business_id = url.searchParams.get("business_id");

    // Fetch based on whether business_id is provided or not
    let locations;
    if (business_id) {
      // Fetch locations by business_id
      locations = await Location.find({ business_id });
      if (!locations.length) {
        return new Response(
          JSON.stringify({ message: `No locations found for business_id: ${business_id}` }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    } else {
      // Fetch all locations
      locations = await Location.find();
    }

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