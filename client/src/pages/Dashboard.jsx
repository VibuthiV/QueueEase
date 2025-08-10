import React from "react";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome, {user?.email}</h1>
        <p className="text-gray-600 mb-6">
          This is your dashboard. From here, you can manage queues, view stats, and update your profile.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition">
          Manage Queues
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
