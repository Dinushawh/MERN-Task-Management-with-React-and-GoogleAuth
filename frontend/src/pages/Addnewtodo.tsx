import React from "react";

function Addnewtodo() {
  const [showModal, setShowModal] = React.useState(false);

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
                <div className="relative p-5 flex-auto">
                  <div className="my-4 text-slate-500  leading-relaxed">
                    <p className="text-black text-sm pb-2">Name the task</p>
                    <input
                      className="focus:outline-black border border-gray-300 p-1 w-full rounded shadow-sm placeholder:text-xs"
                      type="text"
                      placeholder="e.g. Buy groceries"
                    />
                    <p className="text-black text-sm pb-2 pt-4">Task Details</p>
                    <input
                      className="focus:outline-black border border-gray-300 p-1 w-full rounded shadow-sm placeholder:text-xs"
                      type="text"
                      placeholder="e.g. Buy carrots and milk"
                    />
                    <p className="text-black text-sm pb-2 mt-4 ">Daily Goal</p>
                    <div className="grid grid-cols-2">
                      <div className="grid grid-cols-2 items-center">
                        <input
                          className="focus:outline-black border border-gray-300 p-1 rounded shadow-sm placeholder:text-xs w-10 justify-center items-center text-center"
                          type="text"
                          maxLength={2}
                          placeholder="00"
                        />
                        <p>Hours</p>
                      </div>
                      <div className="grid grid-cols-2 items-center">
                        <input
                          className="focus:outline-black border border-gray-300 p-1 rounded shadow-sm placeholder:text-xs w-10 justify-center items-center text-center"
                          type="text"
                          maxLength={2}
                          placeholder="00"
                        />
                        <p>Minuts</p>
                      </div>
                    </div>
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
                    onClick={() => setShowModal(false)}
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
