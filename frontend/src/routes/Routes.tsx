import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default PageRoutes;
