"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CustomerUnsubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [locations, setLocations] = useState([]); // Store locations
  const [selectedLocation, setSelectedLocation] = useState("");
  const [customer, setCustomer] = useState(null);

  const fetchCustomerAndLocations = async (email) => {
    try {
      const response = await fetch("api/findcustomerbyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      const customer = data.customer;
      setCustomer(customer);

      if (customer?._id) {
        fetchLocationsUsingCustomerId(customer._id);
      } else {
        setLocations([]);
      }
    } catch (error) {
      toast.error("Error fetching user data.");
      console.error("Error fetching user:", error);
    }
  };

  const fetchLocationsUsingCustomerId = async (customerId) => {
    try {
      const response = await fetch("/api/fetchlocationsusingcustomerid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId }),
      });

      const data = await response.json();
      const locationIds = data.locationIds;

      if (locationIds && locationIds.length > 0) {
        fetchLocationDetails(locationIds);
      } else {
        setLocations([]);
        toast.info("No locations found for this customer.");
      }
    } catch (error) {
      toast.error("Error fetching locations.");
      console.error("Error fetching locations:", error);
    }
  };

  const fetchLocationDetails = async (locationIds) => {
    try {
      const response = await fetch("/api/fetchlocationsbyids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ locationIds }),
      });

      const data = await response.json();
      setLocations(data.locations || []); // Set the list of locations with full objects
    } catch (error) {
      toast.error("Error fetching location details.");
      console.error("Error fetching location details:", error);
    }
  };

  const handleUnsubscribe = async (event) => {
    event.preventDefault();

    if (!name || !email || !code || !selectedLocation) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: customer._id, // Send customer_id here
          location_id: selectedLocation._id, // Send location's _id
          code,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        setCode(""); 
        setName("");
        setEmail("");
        setLocations([]);
        toast.success("Successfully unsubscribed from notifications!");
      } else {
        toast.error("Please verify to match email and code.");
      }
    } catch (error) {
      toast.error("Error during unsubscribe process.");
      console.error("Error unsubscribing:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-8"
      style={{
        background: "linear-gradient(to right, #001f3d, #243b4a)",
      }}
    >
      <div className="flex justify-center mb-0 mt-0">
        <img
          src="herofoodielogo.png"
          alt="Logo"
          className="w-56 h-56 object-contain"
          style={{
            marginTop: "-30px",
          }}
        />
      </div>

      <div
        className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg"
        style={{
          background: "linear-gradient(to right, #001f3d, #243b4a)",
        }}
      >
        <h2
          className="text-2xl text-center text-[#ff6f61] font-bold mb-1"
          style={{
            background: "linear-gradient(to right, #ff6f61, #f86e4f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Unsubscribe from Food Truck Notifications
        </h2>

        {message && (
          <div className="bg-[#d4edda] text-[#155724] p-4 mb-4 rounded-md border border-[#c3e6cb] text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleUnsubscribe} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => {
              const updatedEmail = e.target.value;
              setEmail(updatedEmail); // Update the email state
              fetchCustomerAndLocations(updatedEmail); // Trigger the fetch function
            }}
            required
            placeholder="Email Address"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <select
            value={selectedLocation ? selectedLocation._id : ""}
            onChange={(e) => {
              const selected = locations.find(
                (location) => location._id === e.target.value
              );
              setSelectedLocation(selected); // Store the full location object
            }}
            required
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location._id} value={location._id}>
                {location.name} - {location.address}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            placeholder="Code"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#ff6f61] text-white font-semibold rounded-md hover:bg-[#ff6f61] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          >
            Unsubscribe
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}