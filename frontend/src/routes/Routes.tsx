import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RegistereSuccess from "../pages/RegistereSuccess";
import Home from "../pages/Home";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register-success" element={<RegistereSuccess />} />
    </Routes>
  );
}

export default PageRoutes;
