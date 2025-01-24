import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const { phones, inTime, outTime, message } = await req.json();
    const apiKey = "1189e60c9e24b86364e74003c5afaf5d1be8ff8ayPGZP4vNsoRdZNz4XyUzYeoU6"; // Replace with your Textbelt API key

    console.log("Sending SMS to customers-vamsi:", phones, inTime, outTime, message);

    if (!phones || phones.length === 0) {
      return NextResponse.json(
        { message: "No phone numbers provided" },
        { status: 400 }
      );
    }

    // Function to send SMS
    const sendSmsToCustomer = async (phone) => {
      try {
        const smsResponse = await fetch("https://textbelt.com/text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: "+1" + phone,
            message: `${message} Available from ${inTime} to ${outTime}.`,
            key: apiKey,
          }),
        });

        const smsData = await smsResponse.json();

        if (smsData.success) {
          console.log(`SMS sent successfully to ${phone}`,smsData);
        } else {
          console.error(`Failed to send SMS to ${phone}:`, smsData);
        }
      } catch (error) {
        console.error(`Error sending SMS to ${phone}:`, error);
      }
    };

    // Send SMS to each phone number
    for (const phone of phones) {
      await sendSmsToCustomer(phone);
    }

    return NextResponse.json(
      { message: "SMS sent successfully to all customers" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sending SMS:", error);
    return NextResponse.json(
      { message: "An error occurred while sending SMS", error: error.message },
      { status: 500 }
    );
  }
}