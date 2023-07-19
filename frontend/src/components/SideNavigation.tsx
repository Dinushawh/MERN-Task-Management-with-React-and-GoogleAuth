import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiFillFileAdd, AiOutlineUser } from "react-icons/ai";
import { BiSolidDashboard, BiSolidLogOut } from "react-icons/bi";
import { MdTask } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SideNavigation() {
  const [open, setOpen] = React.useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
  const navigate = useNavigate();
  const signout = () => {
    closeModal();
    localStorage.removeItem("userSession");
    navigate("/login", { replace: true });
  };
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
          <button onClick={() => setOpen(open)}>
            <MdTask size="30" color="white" />
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
          <div className="flex justify-center align-middle">
            <button onClick={openModal}>
              <BiSolidLogOut color="white" size={22} />
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Do you want to log out?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If you log out, you will be redirected to the login page.
                      all you un saved data will be lost.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={signout}
                    >
                      Got it, Log me out!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SideNavigation;
