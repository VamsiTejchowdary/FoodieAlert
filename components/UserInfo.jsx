"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { set } from "mongoose";

export default function UserInfo() {
  const { data: session, status } = useSession();
  const [locations, setLocations] = useState([]);
  const [user, setUser] = useState([]);

  // Make sure the session is loaded before trying to fetch data
  useEffect(() => {
    if (status === "loading") return; // Wait until session is fully loaded

    if (session?.user?.email) {
      const email = session.user.email;

      const fetchLocations = async () => {
        try {
          const response = await fetch("api/locations", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setLocations(data.locations); // Save locations to state
        } catch (error) {
          console.error("Error fetching locations:", error);
        }
      };

      const resUserExists = async () => {
        try {
          const response = await fetch("api/userExists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();
          const user = data.user; // user is an object
          setUser(user);
          console.log("UserInfoHere: ", user);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

      fetchLocations();
      resUserExists();
    }
  }, [session, status]); // Dependency array to re-run when session or status changes

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading until session is ready
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}