import React from "react";
import SideNavigation from "../components/SideNavigation";
import NewTodo from "./NewTodo";

function Home() {
  return (
    <div className="flex ">
      <SideNavigation />
      <div className="">
        <NewTodo />
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
