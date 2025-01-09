"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CustomerUnsubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async (event) => {
    event.preventDefault();

    if (!name || !email || !code) {
      setMessage("All fields are required.");
      toast.error("All fields are required.");
      return;
    }
    // Perform unsubscribe logic here
    toast.success("Request submitted successfully.");
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
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
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
  buttonHover: {
    backgroundColor: "#e04747",
  },
  message: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#ff5c5c",
  },
};