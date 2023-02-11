import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Homepage";
import SignupPage from "./Signup";
import LoginPage from "./login";
import AboutUs from "./about";

function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}
export default Path;
