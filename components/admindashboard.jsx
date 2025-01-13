"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [activeTab, setActiveTab] = useState("users");

  const handleSignOut = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.push("/login");
    });
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/fetchallusers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.users) {
        setUsers(data.users);
      } else {
        console.log("No users found");
      }
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const updateUserStatus = async (userId, newStatus) => {
    try {
      const response = await fetch("/api/admindashboard/updateuserstatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId, status: newStatus }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        fetchUsers();
        fetchLocations();
        toast.success("Status updated successfully");
      } else {
        toast.error("Error updating status");
        console.error("Error updating status:", data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await fetch("/api/admindashboard/fetchlocations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.locations) {
        setLocations(data.locations);
      } else {
        console.log("No locations found");
      }
    } catch (error) {
      console.log("Error fetching locations:", error);
    }
  };

  const updateLocationStatus = async (locationId, newStatus) => {
    console.log("Updating location status:", locationId, newStatus);
    try {
      const response = await fetch(`/api/admindashboard/updatelocationstatus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: locationId, adminstatus: newStatus }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        fetchLocations();
        toast.success("Location status updated successfully");
      } else {
        toast.error("Error updating location status");
        console.error("Error updating status:", data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLocations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ background: "linear-gradient(to right, #001f3d, #243b4a)" }}>
      <ToastContainer />
      <div className="flex justify-center my-6"
      style={{
        marginTop: "-40px",
      }}>
       <img
          src="foodeehero.png"
          alt="Logo"
          className="w-64 h-64 md:w-72 md:h-72 object-contain"
        />
      </div>
      <div className="relative text-2xl font-bold p-2 inline-block rounded" style={{ color: "#ff6f61", top: "-30px" }}>
        Admin Dashboard
      </div>

      <div className="shadow-lg p-6 md:p-8 bg-[#243b4a] text-white flex flex-col gap-4 rounded-lg border-t-4 border-green-400 w-11/12 max-w-sm md:max-w-md" style={{ background: "linear-gradient(to right, #001f3d, #374958)" }}>
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button onClick={handleSignOut} className="bg-gradient-to-r from-[#ff6f61] to-[#f86e4f] text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded hover:from-[#f56a50] hover:to-[#e95b40] transition-all">
          Log Out
        </button>
      </div>

      <div className="mt-8 w-full max-w-4xl">
        <div className="flex justify-center">
          <button
            className={`px-6 py-2 text-lg font-bold rounded-t-lg ${activeTab === "users" ? "bg-[#ff6f61] text-white" : "bg-[#243b4a] text-gray-400"}`}
            onClick={() => setActiveTab("users")}
          >
            User Approvals
          </button>
          <button
            className={`px-6 py-2 text-lg font-bold rounded-t-lg ${activeTab === "locations" ? "bg-[#ff6f61] text-white" : "bg-[#243b4a] text-gray-400"}`}
            onClick={() => setActiveTab("locations")}
          >
            Location Approvals
          </button>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-white">
          {activeTab === "users" && (
            <div className="grid gap-6 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
              {users.length > 0 ? (
                users.map((user) => (
                  <div key={user._id} className="bg-[#243b4a] rounded-lg shadow-lg p-4 flex flex-col items-start border-t-4" style={{ borderColor: user.status === "approved" ? "green" : "yellow" }}>
                    <h3 className="text-lg font-bold">{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Number: {user.number}</p>
                    <p>
                      Status: <span className={`ml-2 font-bold ${user.status === "approved" ? "text-green-400" : "text-yellow-400"}`}>{user.status}</span>
                    </p>
                    <div className="mt-4 flex gap-2 w-full">
                      {user.status === "pending" && (
                        <>
                          <button onClick={() => updateUserStatus(user._id, "approved")} className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600 w-full">Approve</button>
                          <button onClick={() => updateUserStatus(user._id, "rejected")} className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 w-full">Reject</button>
                        </>
                      )}
                      {user.status === "approved" && (
                        <button onClick={() => updateUserStatus(user._id, "rejected")} className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 w-full">Reject</button>
                      )}
                      {user.status === "rejected" && (
                        <button onClick={() => updateUserStatus(user._id, "approved")} className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600 w-full">Approve</button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center w-full">No users found</p>
              )}
            </div>
          )}

          {activeTab === "locations" && (
            <div className="grid gap-6 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
              {locations.length > 0 ? (
                locations.map((location) => (
                  <div
                    key={location._id}
                    className="bg-[#243b4a] rounded-lg shadow-lg p-4 flex flex-col items-start border-t-4"
                    style={{ borderColor: location.adminstatus === "approved" ? "green" : "yellow" }}
                  >
                    <h3 className="text-lg font-bold">{location.name}</h3>
                    <p>Person Name: {location.businessPersonName}</p>
                    <p>Person Email: {location.businessEmail}</p>
                    <p>Business Address: {location.address}</p>
                    <p>Message Channel: {location.messagechannel}</p>
                    <p>
                      Admin Status: <span className={`ml-2 font-bold ${location.adminstatus === "approved" ? "text-green-400" : "text-yellow-400"}`}>{location.adminstatus}</span>
                    </p>
                    <div className="mt-4 flex gap-2 w-full">
                      {location.adminstatus === "pending" && (
                        <>
                          <button onClick={() => updateLocationStatus(location._id, "approved")} className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600 w-full">Approve</button>
                          <button onClick={() => updateLocationStatus(location._id, "rejected")} className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 w-full">Reject</button>
                        </>
                      )}
                      {location.adminstatus === "approved" && (
                        <button onClick={() => updateLocationStatus(location._id, "rejected")} className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 w-full">Reject</button>
                      )}
                      {location.adminstatus === "rejected" && (
                        <button onClick={() => updateLocationStatus(location._id, "approved")} className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600 w-full">Approve</button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center w-full">No locations found</p>
              )}
            </div>
          )}
        </div>
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