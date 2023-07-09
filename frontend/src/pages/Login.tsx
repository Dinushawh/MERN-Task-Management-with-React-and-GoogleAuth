import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginAuth from "../components/GoogleLogin";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (error: any) => {
    error.preventDefault();
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const IsUserAvailable = async (error: any) => {
    error.preventDefault();
    if (username === "" || password === "") {
      toast.warn("Please provide an email address");
      console.log("Please provide an email address");
    } else {
      const res = await axios.get("http://localhost:5050/users/");
      const data = res.data;
      console.log(data);
      const user = data.find(
        (user: any) =>
          user.email === username &&
          user.password === password &&
          user.googleauth === false
      );
      if (user) {
        toast.success("Login Successful");
        navigate("/home", { replace: true });
      } else {
        toast.error("Something went wrong please try again");
        console.log("Login Failed");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen  ">
        <div className="p-6 rounded shadow-lg w-96 bg-white">
          <h2 className=" text-xl">Hello. Welcome Back! 👋</h2>
          <p className="text-gray-500 text-sm">
            Please sign in to your account.
          </p>
          <form onSubmit={IsUserAvailable}>
            <p className="text-black text-sm pb-2">Email</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="email"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email address"
            />
            <p className="text-black text-sm pb-2 pt-4">Password</p>
            <input
              className="focus:outline-black border border-gray-300 p-2 w-full rounded shadow-sm placeholder:text-xs"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
}

export default Login;
