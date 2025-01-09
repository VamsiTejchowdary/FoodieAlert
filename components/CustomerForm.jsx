"use client"; 
import { useState, useEffect } from "react";

const CustomerForm = () => {
  // State to store form data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [favFood, setfavFood] = useState("");

  // State to store the list of locations fetched from MongoDB
  const [locations, setLocations] = useState([]);

  // State to display a success message
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch locations data from the backend
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("api/locations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setLocations(data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations();
  }, []);

  // Handle form submission
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
        setName(""); // Clear name field
        setPhone(""); // Clear phone field
        setEmail(""); // Clear email field
        setfavFood(""); // Clear favFood field
        setSelectedLocation(""); // Clear location selection

        // Clear the success message after a timeout
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Subscribe to Food Truck Notifications</h2>
        {successMessage && (
          <div style={styles.successMessage}>{successMessage}</div>
        )}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>Phone Number</label>
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="favfood" style={styles.label}>Favourite Food</label>
            <input
              type="text"
              id="favfood"
              value={favFood}
              onChange={(e) => setfavFood(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="location" style={styles.label}>Select Location</label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              required
              style={styles.select}
            >
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location._id} value={location._id}>
                  {location.name} - {location.address}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <button type="submit" style={styles.button}>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  container: {
    maxWidth: "600px",
    width: "100%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  successMessage: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    textAlign: "center",
    border: "1px solid #c3e6cb",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    width: "100%",
  },
  select: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    width: "100%",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s",
  },
};

export default CustomerForm;