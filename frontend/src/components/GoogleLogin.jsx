import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function GoogleLoginAuth() {
  const navigate = useNavigate();

  const isUserAvailable = async (ueerCredentials) => {
    console.log(ueerCredentials);
    const res = await axios.get("http://localhost:5050/users/");
    const data = res.data;
    console.log(data);
    const user = data.find(
      (user) => user.email === ueerCredentials.email && user.googleauth === true
    );
    if (user) {
      toast.success("Login Successful");
      navigate("/home", { replace: true });
    } else {
      toast.error(
        "You have logged in using credentials please login using credentials to continue"
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-4">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
            isUserAvailable(USER_CREDENTIAL);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  );
}

export default GoogleLoginAuth;
