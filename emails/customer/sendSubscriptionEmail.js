// emailUtils.js
import emailjs from "@emailjs/browser";

export const sendEmail = async (email, name, code, locationName,locationAddress) => {
  try {
   // console.log("Sending email to:", email, name, code, locationName, locationAddress);

   const serviceID = process.env.REACT_APP_SERVICE_ID;
   const templateID = process.env.REACT_APP_TEMPLATE_ID;
   const userID = process.env.REACT_APP_USER_ID;
   
   console.log("Sending email to:", email, name, code);
   const response = await emailjs.send(serviceID, templateID, {
      user_name: name,
      email: email,
      food_truck_name: locationName,
      food_truck_location: locationAddress,
      unsubscribe_code: code,
   }, userID);

    if (response.status === 200) {
      console.log("Email sent successfully");
    } else {
      console.error("Failed to send email:", response);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};