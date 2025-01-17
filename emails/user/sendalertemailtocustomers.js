import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

export const sendAlertEmailToCustomer = async (selectedLocation, inTime, outTime, alertMessage) => {
  try {
    let locations = [];
    let customerEmails = []; // This will hold the customer emails

    console.log("Here in email sending, selectedLocation:", selectedLocation);

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
        toast.error("Error fetching location details.");
        console.error("Error fetching location details:", error);
      }
    };

    // Fetch location details for the selected IDs
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

    // Extract necessary information for email if location details are fetched
    if (locations.length > 0) {
      const locationDetails = locations[0]; // Assuming you're sending the first location for now
      console.log("Location details:", locationDetails);

      const { name, address } = locationDetails; // Extracting name and address from the location object

      // Fetch customer emails based on location_id and subscription status
      const fetchCustomerEmails = async (selectedLocation) => {
        try {
          const response = await fetch("api/userdashboard/fetchcustomersbylocationid", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ location_id: selectedLocation }),
          });

          const data = await response.json();
          console.log("Fetched customer emails:", data.emails);
          customerEmails = data.emails || []; // Set the emails
        } catch (error) {
          toast.error("Error fetching customer emails.");
          console.error("Error fetching customer emails:", error);
        }
      };

      // Fetch customer emails based on the location's ID
      await fetchCustomerEmails(selectedLocation);

      if (customerEmails.length > 0) {
        // Now send the email to the customers
        const serviceID = "FoodeAlert"; // Your EmailJS service ID
        const templateID = "useralert"; // Your template ID
        const userID = "Wl5215FfRpqukGjrP"; // Your EmailJS public key
    
        const formattedInTime = formatDateTime(inTime);
        const formattedOutTime = formatDateTime(outTime);

        // Sending the email to customers via EmailJS with the BCC field
        const response = await emailjs.send(serviceID, templateID, {
          food_truck_name: name,
          food_truck_location: address,
          in_time: formattedInTime,
          out_time: formattedOutTime,
          owner_message: alertMessage || "Get Ready for the yummy taste!!!",
          bcc: customerEmails.join(", "), // BCC all customer emails
        }, userID); // Pass userID as the last argument

        if (response.status === 200) {
          console.log("Email sent successfully");
        } else {
          console.error("Failed to send email:", response);
        }
      } else {
        console.log("No subscribed customers to send emails.");
      }
    } else {
      console.log("No location details found.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};