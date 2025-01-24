// pages/api/sendSms.js
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const sendAlertSmsToCustomer = async (selectedLocation, inTime, outTime, alertMessage) => {
  try {
    let locations = [];
    let customerPhones = []; // This will hold the customer phone numbers

    console.log("Here in SMS sending, selectedLocation:", selectedLocation);

    // Fetch location details based on selectedLocation (which is a location ID)
    const fetchLocationDetails = async (selectedLocation) => {
      try {
        const response = await fetch("api/userdashboard/fetchlocationusinglocationid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedLocation }),
        });

        const data = await response.json();
        console.log("Location details:", data.locations);
        locations = data.locations || []; // Set the list of locations with full objects
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
    };

    // Fetch location details for the selected location
    await fetchLocationDetails(selectedLocation);

    const formatDateTime = (dateTime) => {
      const options = {
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true, // AM/PM format
      };
      const date = new Date(dateTime);
      return date.toLocaleString('en-US', options);
    };

    // Extract necessary information for SMS if location details are fetched
    if (locations.length > 0) {
      const locationDetails = locations[0]; // Assuming you're sending the first location for now
      console.log("Location details:", locationDetails);

      const { name, address } = locationDetails; // Extracting name and address from the location object

      // Fetch customer phone numbers based on location_id and subscription status
      const fetchCustomerPhones = async (selectedLocation) => {
        try {
          const response = await fetch("/api/userdashboard/fetchcustomersbylocationid", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ location_id: selectedLocation }),
          });

          const data = await response.json();
          console.log("Fetched customer:", data.phones);
          customerPhones = data.phones || []; // Set the phone numbers
        } catch (error) {
          console.error("Error fetching customer phone numbers:", error);
        }
      };

      // Fetch customer phone numbers based on the location's ID
      await fetchCustomerPhones(selectedLocation);

      if (customerPhones.length > 0) {
        // Now send the SMS to the customers
        const apiKey = "1189e60c9e24b86364e74003c5afaf5d1be8ff8ayPGZP4vNsoRdZNz4XyUzYeoU6"; // Your Textbelt API key

        const formattedInTime = formatDateTime(inTime);
        const formattedOutTime = formatDateTime(outTime);
       
        console.log("Sending SMS to customers:", customerPhones);
        // Sending SMS to customers one by one using Textbelt API
        const smsResponse = await fetch("api/SMS/sendalerttocustomers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phones: customerPhones,
            inTime: inTime,
            outTime: outTime,
            message: alertMessage,
          }),
        });
    
          const smsData = await smsResponse.json();
    
          if (smsData.message ) {
            console.log("SMS sent successfully");
          } else {
            console.error("Failed to send SMS:", smsData);
          }
        return NextResponse.json({ message: "SMS sent successfully" });
      } else {
        console.log("No subscribed customers to send SMS.");
        return NextResponse.json({ message: "No customers found to send SMS" }, { status: 400 });
      }
    } else {
      console.log("No location details found.");
      return NextResponse.json({ message: "Location details not found" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json({ message: "Error occurred while sending SMS." }, { status: 500 });
  }
};