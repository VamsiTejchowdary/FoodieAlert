"use client";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaTimesCircle,FaHourglassHalf } from "react-icons/fa"; // Verified Icon
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session, status } = useSession();
  const [locations, setLocations] = useState([]);
  const router = useRouter();
  const [user, setUser] = useState(null); // Store user details
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [businessName, setBusinessName] = useState(""); // Input field for Business Name
  const [businessAddress, setBusinessAddress] = useState(""); // Input field for Business Location

  useEffect(() => {
    if (status === "loading") return; // Wait until session is fully loaded

    if (session?.user?.email) {
      const email = session.user.email;

      // Fetch user data
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
          const user = data.user; // User object from the response
          setUser(user); // Save user to state

          // Fetch locations using user ID as business_id
          if (user?._id) {
            fetchLocations(user._id);
          }
        } catch (error) {
          toast.error("Error fetching user data.");
          console.error("Error fetching user:", error);
        }
      };

      resUserExists();
    }
  }, [session, status]); // Dependency array to re-run when session or status changes

  const fetchLocations = async (business_id) => {
    try {
      const response = await fetch(
        `/api/fetchlocationsbybusinessid?business_id=${business_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setLocations(data.locations || []); // Save locations to state
    } catch (error) {
      toast.error("Error fetching locations.");
      console.error("Error fetching locations:", error);
    }
  };

  const addNewLocation = async () => {
    if (user.status !== "approved") {
      toast.warning(
        "You cannot add a location until your account is approved."
      );
      return;
    }

    try {
      const res = await fetch("api/registernewlocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          businessAddress,
          userId: user._id,
        }),
      });

      if (res.ok) {
        toast.success("Location added successfully!");
        setBusinessName("");
        setBusinessAddress("");
        setIsModalOpen(false);
        fetchLocations(user?._id); // Refresh locations
      } else {
        toast.error("Failed to add location.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the location.");
      console.error("Error adding location:", error);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading until session is ready
  }

  const handleSignOut = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-100 p-4">
      {/* Toaster container */}
      <ToastContainer />

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-800">
            Hello {session?.user?.name}
          </h1>
          {user?.status === "approved" && (
            <FaCheckCircle className="text-green-500 text-2xl" />
          )}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-lg font-medium text-gray-600">
              <strong>Email:</strong> {session?.user?.email}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  user?.status === "approved"
                    ? "text-green-500"
                    : user?.status === "pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                } font-bold`}
              >
                {user?.status || "Unknown"}
              </span>
            </p>
          </div>
        </div>

        {user?.status === "approved" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Locations
            </h2>
            {locations.length > 0 ? (
              <ul className="list-disc pl-6 space-y-2">
              {locations.map((location, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-500 cursor-pointer"
                >
                  {/* Location Details */}
                  <span>
                    {location.name} - {location.address}
                  </span>
                  {/* Status Icon */}
                  <span>
                    {location.adminstatus === "approved" && (
                      <FaCheckCircle className="text-green-500" />
                    )}
                    {location.adminstatus === "pending" && (
                      <FaHourglassHalf className="text-yellow-500" />
                    )}
                    {location.adminstatus === "rejected" && (
                      <FaTimesCircle className="text-red-500" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
            ) : (
              <p className="text-gray-600">No locations available.</p>
            )}
          </div>
        )}

        {user?.status === "approved" && (
          <div>
            {/* Add Location Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={user?.status !== "approved"}
              className={`w-full px-6 py-3 rounded-lg text-white font-semibold ${
                user?.status === "approved"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } transition duration-300 ease-in-out transform hover:scale-105`}
            >
              Add Location
            </button>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleSignOut}
          className="w-full bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log Out
        </button>
      </div>

      {/* Modal for Adding Location */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <FaTimesCircle className="text-xl" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Add New Location
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-600 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="border border-gray-300 p-3 w-full rounded-lg"
                  placeholder="Enter Business Name"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-600 mb-2">
                  Business Location
                </label>
                <input
                  type="text"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  className="border border-gray-300 p-3 w-full rounded-lg"
                  placeholder="Enter Business Location"
                />
              </div>

              <button
                onClick={addNewLocation}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
