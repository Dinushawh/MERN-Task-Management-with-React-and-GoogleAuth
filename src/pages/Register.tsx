import React, { useState } from "react";
import BasicFooter from "../components/BasicFooter";
import { Link } from "react-router-dom";
import GoogleLogin2 from "../components/GoogleLogin";

function Register() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="p-6 rounded shadow-lg w-96 bg-white">
          <h2 className=" text-xl pb-1">Get Started Now</h2>
          <p className="text-black text-xs ">
            Please enter your credentials to create a free account.
          </p>
          <div className="grid grid-cols-1 gap-4 pb-4">
            <GoogleLogin2 />
          </div>
          <form>
            <p className="text-black text-sm pb-3">
              Sign up with your credentials
            </p>
            <p className="text-black text-sm pb-1">Name</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="text"
              placeholder="Dinuhsa Weerakoon"
            />
            <p className="text-black text-sm pb-1 pt-3">Email</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="email"
              placeholder="dinusha@todoreact.com"
            />
            <p className="text-black text-sm pb-1 pt-3">Password</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="password"
              placeholder="your secrete phrase 🤫 "
            />
            <label className="flex items-center space-x-2 pt-3">
              <input
                type="checkbox"
                className="accent-black"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-700 text-xs">I agree to the </span>
              <span>
                <a href="/#" className="text-blue-800 text-xs">
                  Terms of Service
                </a>
              </span>
            </label>
            <button className=" bg-black hover:bg-slate-800 text-white w-full p-2 rounded shadow-sm mt-4 text-sm">
              Sign up
            </button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-500">
                Already have an account?
                <span>
                  <Link to="/login" className="text-blue-800 text-sm">
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
