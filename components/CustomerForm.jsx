"use client"; 
import { useState, useEffect } from "react";

const CustomerForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [favFood, setFavFood] = useState("");
  const [locations, setLocations] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`api/locations?email=${encodeURIComponent(email)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setLocations(data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    if (email) {
      fetchLocations();
    }
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const code = Math.floor(1000 + Math.random() * 9000);

    const formData = {
      name,
      phone,
      email,
      favfood: favFood,
      code,
      location_id: selectedLocation,
    };

    try {
      const response = await fetch("/api/customersubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("Thank you for subscribing!");
        setName(""); setPhone(""); setEmail(""); setFavFood(""); setSelectedLocation("");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-8 sm:py-4"
      style={{
        background: "linear-gradient(to right, #001f3d, #243b4a)",
      }}
    >
      <div className="flex justify-center mb-0 mt-4 sm:mt-2">
        <img
          src="herofoodielogo.png"
          alt="Logo"
          className="w-56 h-56 object-contain"
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
          Subscribe to Food Truck Notifications
        </h2>

        {successMessage && (
          <div className="bg-[#d4edda] text-[#155724] p-4 mb-4 rounded-md border border-[#c3e6cb] text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Phone Number"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <input
            type="text"
            value={favFood}
            onChange={(e) => setFavFood(e.target.value)}
            required
            placeholder="Favourite Food"
            className="w-full px-4 py-2 border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
          />

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
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

          <button
            type="submit"
            className="w-full py-3 bg-[#ff6f61] text-white font-semibold rounded-md hover:bg-[#f86e4f] focus:outline-none focus:ring-2 focus:ring-[#f86e4f]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;