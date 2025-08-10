import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useUser } from "./context/UserContext";

function PrivateRoute({ children }) {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
