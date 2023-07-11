import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function NewTodo() {
  const menuItems = [
    {
      title: "All Todos",
      no: "4",
    },
    {
      title: "Completed",
      no: "0",
    },
    {
      title: "yet to be completed",
      no: "2",
    },
    {
      title: "Drafts",
      no: "1",
    },
  ];
  return (
    <div className="flex ">
      <div className="w-64 bg-white h-screen">
        <div className="flex  items-center justify-between pl-4 pr-4 pt-8">
          <p className="text-lg font-bold">New Project</p>
          <GrAddCircle size={22} />
        </div>
        <div className="flex  items-center justify-between pl-4 pr-4 pt-8">
          <p className="text-sm font-semibold text-gray-500">Teams</p>
          <IoChevronForwardCircleOutline size={20} color="gray-300" />
        </div>
        <div className="flex  items-center justify-between pl-4 pr-4 pt-8 ">
          <ul className="">
            {menuItems.map((menuItems, index) => (
              <li key={index} className="text-sm text-gray-400 pb-6 flex">
                <div>{menuItems.title}</div>
                <span>
                  <p>{"(" + menuItems.no + ")"}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen  bg-slate-100">
        <div className="grid grid-cols-2"></div>
      </div>
    </div>
  );
}

export default NewTodo;
