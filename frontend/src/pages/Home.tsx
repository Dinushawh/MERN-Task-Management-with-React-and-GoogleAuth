import React from "react";
import "tailwindcss/tailwind.css";
import SideNavigation from "../components/SideNavigation";
import NewTodo from "./AddTasks/NewTodo";
import Addnewtodo from "./AddTasks/Addnewtodo";
import TableModel from "./AddTasks/TableModel";

function Home() {
  return (
    <div className="flex">
      <div className="w-20 bg-gray-200 h-screen">
        <SideNavigation />
      </div>
      <div className="w-56 bg-blue-200 h-screen hidden md:block">
        <NewTodo />
      </div>
      <div className="flex-grow  h-screen">
        <Addnewtodo />
        <div className=" pl-4 pr-4 pt-8">
          <TableModel />
        </div>
      </div>
    </div>

    // <div>
    //   <div>DAta</div>
    //   <li>Name :{user.name}</li>
    //   <li>Email : {user.email}</li>
    //   <button
    //     onClick={() => {
    //       dispatch(login({ name: "sdf", email: "sdf" }));
    //     }}
    //   >
    //     check
    //   </button>
    // </div>
  );
}

export default Home;
