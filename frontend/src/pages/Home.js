import React from "react";
import SideNavigation from "../components/SideNavigation";

function Home() {
  return (
    <div className="flex ">
      <SideNavigation />
      <div className="">Home</div>
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
