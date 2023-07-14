import React from "react";
import "tailwindcss/tailwind.css";
import SideNavigation from "../components/SideNavigation";
import NewTodo from "./NewTodo";

import TableModel from "./TableModel";
import Addnewtodo from "./Addnewtodo";

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
        <div className="flex pl-4 pr-4">
          <TableModel />
        </div>
      </div>
    </div>
    // <div className="flex">
    //   {/* Sidebar */}
    //   <div className="w-sidebar bg-black">{/* Sidebar content */}</div>

    //   {/* Notification Section */}
    //   <div className="w-notification bg-blue-200">
    //     {/* Notification content */}
    //   </div>

    //   {/* Task Section */}
    //   <div className="flex-grow bg-green-200">{/* Task content */}</div>
    // </div>

    // <div className="flex ">
    //   <SideNavigation />
    //   <div className="">
    //     <NewTodo />
    //   </div>
    // </div>
    // <div className="flex">
    //   <Sidebartest />
    //   <NotificationSectiontest />
    //   <Tasktest />
    // </div>

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
