import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/locations";

export async function GET(request) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Parse the request URL to extract the `business_id` query parameter
    const url = new URL(request.url);
    const business_id = url.searchParams.get("business_id");

    if (!business_id) {
      return new Response(
        JSON.stringify({ message: "Missing business_id parameter." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const locations = await Location.find({
      business_id,
      activestatus: true,
    });

    return new Response(
      JSON.stringify({ locations }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
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