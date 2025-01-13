"use client";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaBell,
} from "react-icons/fa"; // Added Bell Icon
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session, status } = useSession();
  const [locations, setLocations] = useState([]);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [inTime, setInTime] = useState("");
  const [outTime, setOutTime] = useState("");

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.email) {
      const email = session.user.email;

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
          const user = data.user;
          setUser(user);

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
  }, [session, status]);

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
      setLocations(data.locations || []);
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
        fetchLocations(user?._id);
      } else {
        toast.error("Failed to add location.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the location.");
      console.error("Error adding location:", error);
    }
  };

  const handleSignOut = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.push("/");
    });
  };

  const handleSendAlert = () => {
    toast.success("Alert sent successfully!");
    setIsAlertModalOpen(false);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="grid place-items-center h-screen bg-gray-50 p-4"
      style={{ background: "linear-gradient(to right, #001f3d, #243b4a)" }}
    >
      <ToastContainer />
      <div
        className="flex justify-center my-6"
        style={{
          marginTop: "-250px",
        }}
      >
        <img
          src="foodeehero.png"
          alt="Logo"
          className="w-64 h-64 md:w-72 md:h-72 object-contain"
        />
      </div>

      <div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6"
        style={{
          background: "linear-gradient(to right, #001f3d, #243b4a)",
          marginTop: "-200px",
        }}
      >
        <div className="relative bg-gradient-to-r from-[#ff7900] to-[#22005c] text-white p-6 sm:p-8 rounded-lg">
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Hello, {session?.user?.name}
              {user?.status === "approved" && (
                <FaCheckCircle className="text-green-500 text-lg sm:text-xl ml-2 inline" />
              )}
            </h1>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <p className="text-lg font-medium text-gray-300">
              <strong>Email:</strong> {session?.user?.email}
            </p>
            <p className="text-lg font-medium text-gray-300">
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
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Locations
            </h2>
            {locations.length > 0 ? (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-lg text-gray-200 hover:text-blue-500 cursor-pointer"
                  >
                    <span>
                      {location.name} - {location.address}
                    </span>
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
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-lg text-white font-semibold bg-[#ff7900] hover:bg-[#22005c] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Location
            </button>
            <FaBell
              onClick={() => setIsAlertModalOpen(true)}
              className="text-white text-2xl cursor-pointer hover:text-yellow-400"
            />
          </div>
        )}

        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log Out
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
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
                className="w-full bg-[#ff7900] text-white py-3 rounded-lg font-semibold hover:bg-[#22005c] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {isAlertModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-[#001f3d] to-[#243b4a] p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsAlertModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-400"
            >
              <FaTimesCircle className="text-xl" />
            </button>

            <h2
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] mb-6"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Send Alert
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  Select Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                >
                  <option value="">Select Location</option>
                  {locations
                    .filter((loc) => loc.adminstatus === "approved")
                    .map((location) => (
                      <option key={location._id} value={location._id}>
                        {location.name} - {location.address}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  Compose Message
                </label>
                <textarea
                  value={alertMessage}
                  onChange={(e) => setAlertMessage(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  rows="4"
                  placeholder="Enter your alert message"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  In Time
                </label>
                <input
                  type="datetime-local"
                  value={inTime}
                  onChange={(e) => setInTime(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  Out Time
                </label>
                <input
                  type="datetime-local"
                  value={outTime}
                  onChange={(e) => setOutTime(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                />
              </div>

              <button
                onClick={handleSendAlert}
                className="w-full bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] text-white py-3 rounded-lg font-semibold hover:from-[#f56a50] hover:to-[#e95b40] transition-all"
              >
                Send Alert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
