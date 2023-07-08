import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

function GoogleLoginAuth() {
  const isUserAvailable = async (ueerCredentials) => {
    console.log(ueerCredentials);
    const res = await axios.get("http://localhost:5050/users/");
    const data = res.data;
    console.log(data);
    const user = data.find((user) => user.email === ueerCredentials.email);
    if (user) {
      toast.error(
        "User already exists with this email address please login to continue"
      );
    } else {
      handleSubmit(ueerCredentials);
    }
  };

  const handleSubmit = async (ueerCredentials) => {
    const password = "loggedwithgoogleauth";
    const role = "user";
    const googleauth = true;
    axios
      .post("http://localhost:5050/users/add", {
        password,
        email: ueerCredentials.email,
        role,
        fullname: ueerCredentials.name,
        googleauth,
      })
      .then((res) => {
        toast.promise(
          new Promise((resolve, reject) => {
            if (res.status === 200) {
              resolve("User created successfully");
            } else {
              reject("Failed to creeate user");
            }
          }),
          {
            pending: "Please wait we are working on your account...",
            success: "User created successfully",
            error: "Failed to create user",
          }
        );
        console.log(res);
      });
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
