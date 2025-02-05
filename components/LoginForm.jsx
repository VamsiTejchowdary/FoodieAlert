"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await resUserExists.json();
      const user = data.user; // user is an object

      if (res.error) {
        toast.error("Invalid Credentials");
        setError("Invalid Credentials");
        return;
      }

      toast.success("Logged in successfully");

      // Redirect based on user role
      if (user.role === "admin") {
        router.push("/admindashboard");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background: "linear-gradient(to right, #001f3d, #243b4a)",
      }}
    >
      {/* Logo Section */}
      <div
        className="flex justify-center my-6"
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
        className="shadow-lg p-6 rounded-lg border-t-4 border-green-400 w-full max-w-md mx-4"
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
          Login
        </h1>

        <ToastContainer />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Input */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="p-3 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />

          {/* Password Input */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
          />

          {/* Login Button */}
          <button
            className="bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] text-white font-bold cursor-pointer px-6 py-3 rounded hover:from-[#f56a50] hover:to-[#e95b40] transition-all w-full"
            type="submit"
          >
            Login
          </button>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md">
              {error}
            </div>
          )}

          {/* Register Link */}
          <Link
            className="text-sm text-center font-medium text-[#ff6f61] hover:text-[#f56a50] transition-all"
            href={"/register"}
          >
            Don&apos;t have an account?{" "}
            <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
    
  );
}
