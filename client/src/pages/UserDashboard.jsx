import React from "react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <p className="text-gray-700">
          Welcome to the user dashboard. Here you can manage your bookings, view queue status, and more.
        </p>
      </div>
    </div>
  );
}
