import React, { useState } from "react";
import BasicFooter from "../components/BasicFooter";
import { Link } from "react-router-dom";
import GoogleLoginAuth from "../components/GoogleLogin";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [fullname, setFullname] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (error: any) => {
    error.preventDefault();

    axios
      .post("http://localhost:5050/users/add", {
        password,
        email,
        role,
        fullname,
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
            pending: "Loading...",
            success: "User created successfully",
            error: "Failed to create user",
          }
        );
        console.log(res);
      })

      .catch((err) => {
        toast.error("Failed to create user");
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="p-6 rounded shadow-lg w-96 bg-white">
          <h2 className=" text-xl pb-1">Get Started Now 🤗 </h2>
          <p className="text-black text-xs ">
            Please enter your credentials to create a free account.
          </p>
          <div className="grid grid-cols-1 gap-4 pb-4">
            <GoogleLoginAuth />
          </div>
          <form onSubmit={handleSubmit}>
            <p className="text-black text-sm pb-3">
              Sign up with your credentials
            </p>
            <p className="text-black text-sm pb-1">Name</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="text"
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Dinuhsa Weerakoon"
            />
            <p className="text-black text-sm pb-1 pt-3">Email</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dinusha@todoreact.com"
            />
            <p className="text-black text-sm pb-1 pt-3">Password</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your secrete phrase 🤫 "
            />
            <label className="flex items-center space-x-2 pt-3">
              <input
                type="checkbox"
                className="accent-black"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-700 text-xs">
                I agree to the
                <span>
                  <a href="/#" className="text-blue-800 text-xs">
                    {" "}
                    Terms of Service
                  </a>
                </span>
              </span>
            </label>
            <button className=" bg-black hover:bg-slate-800 text-white w-full p-2 rounded shadow-sm mt-4 text-sm">
              Sign up
            </button>
            <ToastContainer />
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-500">
                Already have an account?
                <span>
                  <Link to="/login" className="text-sm text-blue-500">
                    {" "}
                    Log in here
                  </Link>
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
      <BasicFooter />
    </>
  );
}

export default Register;