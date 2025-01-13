import emailjs from "@emailjs/browser";

export const sendEmail = async (email, name, code, locationName, locationAddress) => {
  try {
    // Make sure the correct env variables are being logged
    const serviceID = "FoodeAlert"; // Your EmailJS service ID
    const templateID = "foodealert"; // Your template ID
    const userID = "Wl5215FfRpqukGjrP"; // Your EmailJS public key

    // Corrected emailjs.send() syntax:
    console.log("Sending email to:", email, name, code);
    const response = await emailjs.send(serviceID, templateID, {
      user_name: name,
      email: email,
      food_truck_name: locationName,
      food_truck_location: locationAddress,
      unsubscribe_code: code,

    }, userID); // Pass userID as the last argument

    if (response.status === 200) {
      console.log("Email sent successfully");
    } else {
      console.error("Failed to send email:", response);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};