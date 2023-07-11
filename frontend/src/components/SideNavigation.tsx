import React from "react";
import { AiFillFileAdd, AiOutlineUser } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

function SideNavigation() {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    {
      title: "New",
      src: "/",
      icon: <AiFillFileAdd size="22" color="white" />,
    },
    {
      title: "Dashboard",
      src: "/",
      icon: <BiSolidDashboard size="22" color="white" />,
    },
    {
      title: "Home",
      src: "/",
      icon: <AiOutlineUser size="22" color="white" />,
    },
  ];
  return (
    <>
      <div
        className={`${
          open ? "w-56" : "w-20"
        } duration-300 h-screen bg-black relative`}
      >
        <div
          className={`${
            open
              ? "flex justify-end items-left pt-4 pb-10"
              : "flex justify-center items-center pt-4 pb-10"
          } h-20 duration-300`}
        >
          <button onClick={() => setOpen(!open)}>
            <FiMoreHorizontal size="20" color="white" />
          </button>
        </div>
        <div className="">
          <div>
            <ul>
              {menuItems.map((menuItems, index) => (
                <li
                  key={index}
                  className={`${
                    open
                      ? "flex items-left justify-left pl-7"
                      : "flex items-center justify-center"
                  } duration-300 text-white text-sm pb-12 cursor-pointer`}
                >
                  <div>{menuItems.icon}</div>
                  <div>
                    <p
                      className={`${
                        open ? "" : "hidden"
                      } duration-300 text-white text-sm pl-4`}
                    >
                      {menuItems.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <CiLogout color="white" size={22} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavigation;
