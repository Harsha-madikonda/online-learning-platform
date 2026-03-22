import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <Router>

      {/* 🌐 BEAUTIFUL NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "15px",
          backgroundColor: "#1e293b"
        }}
      >
        <Link style={navStyle} to="/">Home</Link>
        <Link style={navStyle} to="/login">Login</Link>
        <Link style={navStyle} to="/register">Register</Link>
        <Link style={navStyle} to="/courses">Courses</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course-details" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

// 🎨 Button Style
const navStyle = {
  textDecoration: "none",
  color: "#fff",
  padding: "8px 15px",
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  fontWeight: "bold"
};

export default App;