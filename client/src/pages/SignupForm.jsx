import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);
      localStorage.setItem("token", res.data.token);
      setUser({ role: res.data.role });
      setMessage(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <input className="w-full p-2 border mb-3" type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input className="w-full p-2 border mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="w-full p-2 border mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <select name="role" className="w-full p-2 border mb-3" onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Signup</button>
      </form>
    </div>
  );
}
