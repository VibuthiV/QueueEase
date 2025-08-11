import React from "react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-700">
          Welcome to the admin dashboard. Here you can manage queues, monitor usage, and configure system settings.
        </p>
      </div>
    </div>
  );
}
