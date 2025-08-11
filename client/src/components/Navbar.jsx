import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white font-extrabold text-2xl tracking-wide">
          QueueEase
        </Link>

        <div className="space-x-6">
          {!user && (
            <>
              <Link to="/" className="text-white hover:text-yellow-300 transition">Home</Link>
              <Link to="/login" className="text-white hover:text-yellow-300 transition">Login</Link>
              <Link to="/signup" className="text-white hover:text-yellow-300 transition">Signup</Link>
            </>
          )}
          {user && (
            <>
              <Link to="/dashboard" className="text-white hover:text-yellow-300 transition">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded text-white hover:bg-red-600 transition">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
