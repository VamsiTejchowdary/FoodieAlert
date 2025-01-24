import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();

    const { phone, locationName, locationAddress} = await req.json();

    const apiKey = "1189e60c9e24b86364e74003c5afaf5d1be8ff8ayPGZP4vNsoRdZNz4XyUzYeoU6";
    const smsResponse = await fetch("https://textbelt.com/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "+1" + phone,
        message: `"Your registration is successful for ${locationName}. Come visit us at ${locationAddress} for some delicious food. We look forward to serving you!"`,
        key: apiKey,
      }),
    });

    const smsData = await smsResponse.json();

    if (smsData.success) {
      return NextResponse.json({ message: "SMS sent successfully" });
    } else {
      return NextResponse.json(
        { message: "Failed to send SMS" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in sending SMS:", error);
    return NextResponse.json(
      { message: "Error occurred while sending SMS." },
      { status: 500 }
    );
  }
}