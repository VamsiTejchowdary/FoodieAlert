"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [messageChannel, setMessageChannel] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !number ||
      !businessName ||
      !businessAddress
    ) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();

      if (user) {
        toast.error("User already exists.");
        return;
      }
      const passcode = Math.floor(1000 + Math.random() * 9000);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          number,
          passcode,
          businessName,
          businessAddress,
          messageChannel, // Include message channel in the payload
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        toast.success("User registration Successful!", {
          onClose: () => router.push("/login"), // Navigate after toast disappears
        });
      } else {
        toast.error("User registration failed!");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-[#001f3d] to-[#243b4a]">
      {/* Logo at the Top */}
      <div
        className="flex justify-center mt-1 mb-0"
        style={{
          marginTop: "-40px",
        }}
      >
        <img
          src="foodeehero.png"
          alt="Logo"
          className="w-64 h-64 md:w-72 md:h-72 object-contain"
        />
      </div>

      {/* Form Section */}
      <div
        className="shadow-lg p-6 rounded-lg border-t-4 border-green-400 w-full max-w-lg mx-4"
        style={{
          background: "linear-gradient(to right, #001f3d, #374958)",
        }}
      >
        <h1
          className="text-2xl font-bold my-4 text-center"
          style={{
            background: "linear-gradient(to right, #ff6f61, #f86e4f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Register
        </h1>

        <ToastContainer />
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />
          <input
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder="Number"
            className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />
          <input
            onChange={(e) => setBusinessName(e.target.value)}
            type="text"
            placeholder="Business Name"
            className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />
          <input
            onChange={(e) => setBusinessAddress(e.target.value)}
            type="text"
            placeholder="Business Address"
            className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />
          {/* Dropdown for Message Channel */}
          <select
            onChange={(e) => setMessageChannel(e.target.value)}
            value={messageChannel}
            className="p-4 rounded border-none bg-[#243b4a] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          >
            <option value="option">Select Channel</option>
            <option value="sms">SMS</option>
            <option value="email">Email</option>
            <option value="both">Both</option>
          </select>

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />

          <button
            className="bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] text-white font-bold cursor-pointer px-6 py-3 rounded hover:from-[#f56a50] hover:to-[#e95b40] transition-all w-full"
            type="submit"
          >
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link
            className="text-sm text-center font-medium text-[#ff6f61] hover:text-[#f56a50] transition-all"
            href={"/login"}
          >
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
      <footer
        className="footer"
        style={{
          padding: "30px",
          textAlign: "center",
          color: "#ddd",
        }}
      >
        <p>&copy; 2025 FoodeAlert. All rights reserved.</p>
      </footer>
    </div>
  );
}
