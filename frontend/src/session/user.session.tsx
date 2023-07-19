import React, { useState } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Usersession() {
  const [session, setSession] = useState(localStorage.getItem("userSession"));

  return <>{session ? <Home /> : <Login />}</>;
}

export default Usersession;
