"use client"; 
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);

  const handleSignOut = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.push("/");
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/fetchallusers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        console.log("Response data:", data);
        if (data.users) {
            setUsers(data.users); // Always an array
          } else {
            console.log("No users found");
          }
        
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
  
    fetchUsers();
  }, []);

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
          onClick={handleSignOut} // Redirect to home page or login page
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>

      {/* Display users fetched from API */}
      <div className="mt-6">
        <h2 className="font-bold text-lg">All Users</h2>
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id} className="py-2">
                <span className="font-bold">{user.name}</span> - {user.email}
              </li>
            ))
          ) : (
            <li>No users found</li>
          )}
        </ul>
      </div>
    </div>
  );
}