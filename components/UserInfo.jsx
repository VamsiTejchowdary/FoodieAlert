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
import { sendAlertEmailToCustomer } from "../emails/user/sendalertemailtocustomers";
import { sendAlertSmsToCustomer } from "../emails/user/sendalerttocustomers";

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
  const [messageChannel, setMessageChannel] = useState(""); // Default option

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
      //console.log(data.locations);
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

  const handleSendAlert = async () => {
    if (
      !selectedLocation ||
      !inTime ||
      !outTime
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
     // console.log(selectedLocation, alertMessage, inTime, outTime, user._id);
      const res = await fetch("api/userdashboard/sendalert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location_id: selectedLocation,
          business_id: user._id,
          message: alertMessage || "",
          in_time: inTime,
          out_time: outTime,
        }),
      });

      const data = await res.json();


      if (res.ok) {
       // await sendAlertEmailToCustomer(selectedLocation, inTime, outTime, alertMessage);
        await sendAlertSmsToCustomer(selectedLocation, inTime, outTime, alertMessage);
  
        toast.success("Alert sent successfully!");
        setSelectedLocation('');
        setAlertMessage('');
        setInTime('');
        setOutTime('');
      } else {
        toast.error(data.message || "Failed to send alert.");
      }
    } catch (error) {
      console.error("Error sending alert:", error);
      toast.error("Failed to send alert. Please try again.");
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: "linear-gradient(to right, #001f3d, #243b4a)" }}
    >
      <ToastContainer />
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

      <div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6"
        style={{
          background: "linear-gradient(to right, #001f3d, #243b4a)",
          marginTop: "-100px",
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
          <div className="flex justify-between items-center space-x-4 mt-4">
            {/* Add Location Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-lg text-white font-semibold bg-[#ff7900] hover:bg-[#ff7900] transition-all transform hover:scale-105 focus:outline-none"
            >
              Add Location
            </button>

            {/* Bell Icon */}
            <FaBell
              onClick={() => setIsAlertModalOpen(true)}
              className="text-white text-2xl cursor-pointer hover:text-yellow-400 transition-all"
            />
          </div>
        )}

        {/* Log Out Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 focus:outline-none"
          >
            Log Out
          </button>
        </div>
      </div>
      {user?.status === "approved" && (
        <div className="mt-8">
          <h2
            className="text-xl font-semibold mb-4"
            style={{
              textAlign: "center",
              color: "#ff6f61",
            }}
          >
            Locations
          </h2>
          {locations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-[#001f3d] to-[#243b4a] p-6 rounded-lg shadow-lg flex flex-col justify-between space-y-4"
                >
                  {/* Location Name and Status */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {location.address}
                      </p>
                    </div>
                    <span>
                      {location.adminstatus === "approved" && (
                        <FaCheckCircle className="text-green-500 text-lg" />
                      )}
                      {location.adminstatus === "pending" && (
                        <FaHourglassHalf className="text-yellow-500 text-lg" />
                      )}
                      {location.adminstatus === "rejected" && (
                        <FaTimesCircle className="text-red-500 text-lg" />
                      )}
                    </span>
                  </div>

                  {/* Customer Count Display */}
                  <div className="flex flex-col items-center justify-center mt-6">
                    <div className="bg-[#ff7900] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      <p className="text-xl font-bold">
                        {location.customerCount}
                      </p>
                    </div>
                    {/* Reduced opacity for 'Customers' */}
                    <p className="mt-2 text-sm text-white opacity-60">
                      Customers
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No locations available.</p>
          )}
        </div>
      )}
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
      {/* Add location Model */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-[#001f3d] to-[#374958] p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#ff6f61] hover:text-[#f56a50] transition-all"
            >
              <FaTimesCircle className="text-2xl" />
            </button>

            <h2
              className="text-2xl font-bold mb-6 text-center"
              style={{
                background: "linear-gradient(to right, #ff6f61, #f86e4f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Add New Location
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  placeholder="Enter Business Name"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  Business Location
                </label>
                <input
                  type="text"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  placeholder="Enter Business Location"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white mb-2">
                  Message Channel
                </label>
                <select
                  value={messageChannel}
                  onChange={(e) => setMessageChannel(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                >
                  <option value="" disabled>
                    Select Message Channel
                  </option>
                  <option value="sms">SMS</option>
                  <option value="email">Email</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <button
                onClick={addNewLocation}
                className="bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] text-white font-bold cursor-pointer px-6 py-3 rounded hover:from-[#f56a50] hover:to-[#e95b40] transition-all w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Send Nofication Model */}
      {isAlertModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-gradient-to-r from-[#001f3d] to-[#243b4a] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative max-h-screen overflow-y-auto"
            style={{
              margin: "auto",
            }}
          >
            <button
              onClick={() => setIsAlertModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-400"
              aria-label="Close"
            >
              <FaTimesCircle className="text-xl" />
            </button>

            <h2
              className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] mb-6"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Send Alert
            </h2>

            <div className="space-y-6">
              <div>
                <label
                  className="block text-lg font-medium text-white mb-2"
                  htmlFor="select-location"
                >
                  Select Location
                </label>
                <select
                  id="select-location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  required
                >
                  <option value="">Select Location</option>
                  {locations
                    .filter((loc) => loc.adminstatus === "approved" && loc.customerCount > 0) 
                    .map((location) => (
                      <option key={location._id} value={location._id}>
                        {location.name} - {location.address}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-lg font-medium text-white mb-2"
                  htmlFor="compose-message"
                >
                  Compose Message
                </label>
                <textarea
                  id="compose-message"
                  value={alertMessage}
                  onChange={(e) => setAlertMessage(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  rows="4"
                  placeholder="Enter your alert message"
                />
              </div>

              <div>
                <label
                  className="block text-lg font-medium text-white mb-2"
                  htmlFor="in-time"
                >
                  In Time
                </label>
                <input
                  id="in-time"
                  type="datetime-local"
                  value={inTime}
                  onChange={(e) => setInTime(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-lg font-medium text-white mb-2"
                  htmlFor="out-time"
                >
                  Out Time
                </label>
                <input
                  id="out-time"
                  type="datetime-local"
                  value={outTime}
                  onChange={(e) => setOutTime(e.target.value)}
                  className="p-4 rounded border-none bg-[#243b4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] w-full"
                  required
                />
              </div>

              <button
                onClick={handleSendAlert}
                className="w-full bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] text-white py-3 rounded-lg font-semibold hover:from-[#f56a50] hover:to-[#e95b40] transition-all focus:outline-none focus:ring-4 focus:ring-[#ff6f61]"
                type="submit"
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
