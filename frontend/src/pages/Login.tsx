import React, { useState } from "react";
import BasicFooter from "../components/BasicFooter";

import { Link } from "react-router-dom";
import GoogleLoginAuth from "../components/GoogleLogin";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [username, setUsername] = useState("");

  const handleFetchData = () => {
    axios
      .get("http://localhost:5050/users/")
      .then((res) => {
        toast.promise(
          new Promise((resolve, reject) => {
            if (res.status === 200) {
              resolve("Data fetched successfully");
            } else {
              reject("Failed to fetch data");
            }
          }),
          {
            pending: "Fetching data...",
            success: "Data fetched successfully",
            error: "Failed to fetch data",
          },
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        );
        console.log(res);
      })
      .catch((err) => {
        toast.error("Failed to fetch data");
      });
  };

  const handleSubmit = async (error: any) => {
    error.preventDefault();

    axios
      .get("http://localhost:5050/users/")
      .then((res) => {
        toast.promise(
          new Promise((resolve, reject) => {
            if (res.status === 200) {
              resolve("Data fetched successfully");
            } else {
              reject("Failed to fetch data");
            }
          }),
          {
            pending: "Fetching data...",
            success: "Data fetched successfully",
            error: "Failed to fetch data",
          }
        );
        console.log(res);
      })
      .catch((err) => {
        toast.error("Failed to fetch data");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen  ">
        <div className="p-6 rounded shadow-lg w-96 bg-white">
          <h2 className=" text-xl">Hello. Welcome Back! 👋</h2>
          <p className="text-gray-500 text-sm">
            Please sign in to your account.
          </p>
          <form onSubmit={handleSubmit}>
            <p className="text-black text-sm pb-2">Email</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email address"
            />
            <p className="text-black text-sm pb-2 pt-4">Password</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex ">
              <label className="flex items-center space-x-2 pt-3">
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="text-gray-700 text-sm">Remember me</span>
              </label>
              <a href="/#" className="text-sm text-blue-400 ml-auto pt-3">
                Forget password
              </a>
            </div>
            <div>
              <button className=" bg-black hover:bg-slate-800 text-white w-full p-2 rounded shadow-sm mt-4 text-sm">
                Login
              </button>
            </div>

            <GoogleLoginAuth />
            <div className="flex items-center justify-left mt-4">
              <span className="text-sm text-gray-500">
                Don't have an account?
              </span>
              <Link to="/register" className="text-sm text-blue-400 ml-2">
                {" "}
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <BasicFooter />
    </>
  );
}

export default Login;
