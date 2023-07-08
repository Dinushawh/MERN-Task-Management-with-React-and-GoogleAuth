import React, { useState } from "react";
import BasicFooter from "../components/BasicFooter";

import { Link } from "react-router-dom";
import GoogleLoginAuth from "../components/GoogleLogin";

function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen  ">
        <div className="p-6 rounded shadow-lg w-96 bg-white">
          <h2 className=" text-xl">Hello. Welcome Back! 👋</h2>
          <p className="text-gray-500 text-sm">
            Please sign in to your account.
          </p>
          <form>
            <p className="text-black text-sm pb-2">Email</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="text"
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
            <button className=" bg-black hover:bg-slate-800 text-white w-full p-2 rounded shadow-sm mt-4 text-sm">
              Login
            </button>
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
