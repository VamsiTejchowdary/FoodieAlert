"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail(""); // Clear email after subscription
  };

  function Popup({ setShowPopup }) {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>How FoodieAlert Works</h2>
          <ul className="steps-list">
            <li>
              <strong>Step 1:</strong> Business Owner creates an account.
            </li>
            <li>
              <strong>Step 2:</strong> Admin reviews and approves the account.
            </li>
            <li>
              <strong>Step 3:</strong> Once approved, you’re all set to go!
            </li>
            <li>
              <strong>Step 4:</strong> Share the QR Code or link we provide to
              customers near your truck.
            </li>
            <li>
              <strong>Step 5:</strong> Customers subscribe to your updates
              effortlessly.
            </li>
            <li>
              <strong>Step 6:</strong> Send triggers to notify your subscribers
              about your location in real time.
            </li>
            <li>
              <strong>Step 7:</strong> Notifications are sent directly to
              customers who subscribed.
            </li>
            <li>
              <strong>That’s it!</strong> Grow your customer base and keep them
              coming back for more.
            </li>
          </ul>
          <button className="close-popup" onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    
    <div className="landing-page">
      <style jsx>{`
        .landing-page {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(to right, #001f3d, #243b4a);
          min-height: 100vh;
          color: white;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          flex: 1;
        }

        .hero {
          text-align: center;
          padding: 20px 20px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 0px;
        }

        .hero-img {
          width: 40%;
          max-width: 350px;
          height: 350px;
          margin-top: -100px;
        }

        .hero p {
          font-size: 1.4rem;
          color: #ddd;
          margin-top: -50px;
        }

        .cta-button {
          background-color: #ff6f61;
          padding: 15px 40px;
          font-size: 1.2rem;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 12px;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #f56a50;
        }
        .info-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
          gap: 30px;
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(to right, #001f3d, #374958);
          color: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 600px;
          text-align: center;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .card ul {
          text-align: left;
          margin: 15px 0;
          padding: 0 20px;
        }
        .card ul li {
          margin-bottom: 10px;
          font-size: 1.1rem;
          line-height: 1.5;
          color: #f9f9f9;
        }
        .card ul li strong {
          color: #ff6f61;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        }
        .card img {
          width: 100%;
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .card h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #ff6f61;
        }
        .card p {
          font-size: 1.2rem;
          color: #f9f9f9;
          margin-bottom: 20px;
        }
        .card .cta-button {
          background-color: #ff6f61;
        }
        .footer {
          background-color: linear-gradient(to right, #001f3d, #243b4a);
          padding: 20px;
          text-align: center;
          color: #ddd;
        }

        @media (max-width: 768px) {
          .hero-img {
            width: 100%;
            max-width: 360px;
          }

          .hero p {
            font-size: 1.2rem;
          }
          .card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <img
            src="herofoodie.png" // Update with your logo's image URL
            alt="FoodieAlert Logo"
            className="hero-img"
          />
          <p>
            Revolutionizing How Food Trucks Reach and Serve Customers! Stay
            ahead with real-time notifications about food trucks near you. Get
            updates delivered straight to your inbox whenever your favorite food
            truck is nearby.
          </p>
        </section>

        {/* Info Section */}
        <section className="info-section">
          {/* Business Owner Card */}
          <div className="card">
            <img src="foodietruck.png" alt="Business Owners" />
            <h2>For Business Owners</h2>
            <p>
              Are you running a food truck and looking for ways to grow your
              business? FoodieAlert is here to help you reach more customers
              effortlessly.
            </p>
            <ul>
              <li>
                <strong>Real-time Notifications:</strong> Let your customers
                know exactly where you are.
              </li>
              <li>
                <strong>Targeted Audience:</strong> Notify only the customers
                who love your cuisine.
              </li>
              <li>
                <strong>Easy Setup:</strong> Create your account and start
                sending notifications in minutes.
              </li>
              <li>
                <strong>Boost Sales:</strong> Increase foot traffic to your food
                truck with timely updates.
              </li>
            </ul>
            <p>
              Join hundreds of food truck owners who trust FoodieAlert to keep
              their customers informed and engaged.
            </p>
            <a href="#get-quote">
              <button className="cta-button">Get a Quote</button>
            </a>
          </div>

          {/* Customer Card */}
          <div className="card">
            <img src="foodiecustomer.png" alt="Customers" />
            <h2>For Customers</h2>
            <p>
              Never miss out on your favorite food truck! Subscribe to get
              instant notifications on their location.
            </p>
            <button className="cta-button">Subscribe</button>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 FoodieAlert. All rights reserved.</p>
      </footer>

      <ToastContainer />
    </div>
  );
}
