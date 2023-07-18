import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import moment from "moment";
import { AiFillDelete } from "react-icons/ai";

function TableModel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/tasks/") // Replace with your actual API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderPriorityIcon = (priority) => {
    if (priority === "High") {
      return <BiSolidUpArrow className="text-red-500" size={20} />;
    } else if (priority === "Low") {
      return <BiSolidDownArrow className="text-green-500" />;
    } else {
      return null;
    }
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    TASK
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    start date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    end date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    priority
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item._id}>
                    <td className="py-3 pl-4">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.task}
                      </p>
                      <span className="text-gray-400 text-xs">
                        {item.description}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {moment(item.startdate).utc().format("YYYY-MM-DD")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {moment(item.enddate).utc().format("YYYY-MM-DD")}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <div className="grid grid-cols-2">
                        {item.priority}
                        {renderPriorityIcon(item.priority)}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap ">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full p-1 bg-green-100 text-green-800">
                        {item.status}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className=" p-2 text-blue-400 hover:rounded-md hover:bg-slate-100  hover:duration-300"
                        // onClick={() => handleEdit(item._id)}
                      >
                        <RiPencilLine size={20} />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className=" p-2 text-red-400 hover:rounded-md hover:bg-slate-100  hover:duration-300"
                        // onClick={() => handleEdit(item._id)}
                      >
                        <AiFillDelete size={20} />
                      </button>
                    </td>
                    {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableModel;
