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
        toast.error("No customer found with this email.");
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
    <div style={styles.container}>
      <h2 style={styles.title}>Unsubscribe from Notifications</h2>
      <form onSubmit={handleUnsubscribe} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              const updatedEmail = e.target.value;
              setEmail(updatedEmail); // Update the email state
              fetchCustomerAndLocations(updatedEmail); // Trigger the fetch function
            }}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>
            Select Location:
          </label>
          <select
            id="location"
            value={selectedLocation ? selectedLocation._id : ""}
            onChange={(e) => {
              const selected = locations.find(
                (location) => location._id === e.target.value
              );
              setSelectedLocation(selected); // Store the full location object
            }}
            style={styles.input}
            required
          >
            <option value="">-- Select a Location --</option>
            {locations.map((location) => (
              <option key={location._id} value={location._id}>
                {location.name} - {location.address}
              </option>
            ))}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="code" style={styles.label}>
            Code:
          </label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Unsubscribe
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <ToastContainer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    outline: "none",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ff5c5c",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#ff5c5c",
  },
};
