import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Dropdown from "../../components/Dropdown";
import Status from "../../components/Status";
import { toast } from "react-toastify";
import axios from "axios";

function Addnewtodo() {
  const [showModal, setShowModal] = React.useState(false);
  const [userid] = useState(localStorage.getItem("userid"));
  const [task, setnewTask] = useState("");
  const [description, setDescription] = useState("");

  const [deadline, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [startdate, setStartDate] = useState(Date);
  const [enddate, setEndDate] = useState(Date);

  const handleValueChange = (value: any) => {
    setValue(value);
  };

  const [category, setNewCategory] = useState("");
  const [subtasks, setNewSubTask] = useState("");
  const [comments, setComment] = useState("");

  const [priority, setPriority] = useState("");
  const handleCallback = (data: string) => {
    setPriority(data);
    console.log("Received data in parent component:", data);
  };
  const [status, setStatus] = useState("");
  const handleCallback2 = (data: string) => {
    setStatus(data);
    console.log("Received data in parent component:", data);
  };

  const handleSubmit = async () => {
    if (
      localStorage.getItem("uderid") === "" ||
      task === "" ||
      description === "" ||
      category === "" ||
      deadline.endDate === null ||
      deadline.startDate === null ||
      priority === "" ||
      status === "" ||
      subtasks === "" ||
      comments === ""
    ) {
      toast.error("Please fill all the fields");
      console.log("please fill");
      console.log(deadline);
    } else {
      setStartDate(deadline.startDate);
      setEndDate(deadline.endDate);
      axios
        .post("http://localhost:5050/tasks/new-task", {
          userid,
          task,
          description,
          startdate,
          enddate,
          status,
          priority,
          category,
          subtasks,
          comments,
        })
        .then((res) => {
          toast.promise(
            new Promise((resolve, reject) => {
              if (res.status === 200) {
                resolve("Task Added successfully");
              } else {
                reject("Failed to add the task");
              }
            }),
            {
              pending: "Please wait we are working on your account...",
              success: "User created successfully",
              error: "Failed to create user",
            }
          );
          console.log(res);
        })
        .catch((err: any) => {
          toast.error("Failed to create user");
        });
    }
  };

  return (
    <>
      <div className="pl-6 pt-6">
        <button
          className="bg-black hover:bg-slate-900 text-white py-2 px-4 rounded text-sm"
          onClick={() => setShowModal(true)}
        >
          Add new task
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="grid grid-rows-2 grid-flow-col">
                    <h3 className="text-md font-semibold">Add new task</h3>
                    <p className="text-xs text-slate-500">
                      Add your daily task to be updated daily
                    </p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative pl-4 pr-4 flex-auto">
                  <div className="my-4 text-slate-500  leading-relaxed">
                    <p className="text-black text-sm pb-1">Task</p>
                    <input
                      className="focus:outline-black  p-2 w-full rounded shadow-sm placeholder:text-xs bg-slate-100 placeholder:p-2 text-sm"
                      type="text"
                      placeholder="e.g. Buy groceries"
                      onChange={(e) => setnewTask(e.target.value)}
                    />
                    <p className="text-black text-sm pb-1 pt-3">Description</p>
                    <input
                      className="focus:outline-black  p-2 w-full rounded shadow-sm placeholder:text-xs bg-slate-100 placeholder:p-2 text-sm"
                      type="text"
                      placeholder="e.g. Buy groceries from walmart"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="text-black text-sm pb-1 pt-3">Deadline</p>
                    <Datepicker
                      inputClassName="focus:outline-black  p-2 w-full rounded shadow-sm placeholder:text-xs bg-slate-100 placeholder:p-2 text-sm"
                      primaryColor={"blue"}
                      useRange={false}
                      value={deadline}
                      onChange={handleValueChange}
                    />
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      <div className="grid grid-rows-1 ">
                        <p className="text-black text-sm ">Priority</p>
                        <Dropdown callback={handleCallback} />
                      </div>
                      <div className="grid grid-row-1 w-48">
                        <p className="text-black text-sm ">Status</p>
                        <Status callback={handleCallback2} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      <div className="grid grid-rows-1 ">
                        <p className="text-black text-sm pb-1">Category</p>
                        <input
                          className="focus:outline-black  p-2 w-full rounded shadow-sm placeholder:text-xs bg-slate-100 placeholder:p-2 text-sm"
                          type="text"
                          placeholder="e.g. Buy groceries"
                          onChange={(e) => setNewCategory(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-row-1 w-48">
                        <p className="text-black text-sm pb-1">Subtask</p>
                        <input
                          className="focus:outline-black  p-2 w-full rounded shadow-sm placeholder:text-xs bg-slate-100 placeholder:p-2 text-sm"
                          type="text"
                          placeholder="e.g. Buy groceries"
                          onChange={(e) => setNewSubTask(e.target.value)}
                        />
                      </div>
                    </div>
                    <p className="text-black text-sm pb-1 pt-3">Comment</p>
                    <input
                      className="focus:outline-black  p-2 w-full rounded shadow-sm placeholder:text-xs bg-slate-100 placeholder:p-2 text-sm"
                      type="text"
                      placeholder="e.g. Buy groceries"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-black text-white hover:bg-slate-800 uppercase text-xs px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Addnewtodo;
