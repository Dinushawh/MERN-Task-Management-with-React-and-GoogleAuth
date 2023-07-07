import React from "react";

function BasicFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" fixed inset-x-0 bottom-0 py-4 text-center ">
      <p className="text-gray-500 text-sm">
        {currentYear} &copy; All Rights Reserved. ToDo-React
      </p>
    </footer>
  );
}

export default BasicFooter;
