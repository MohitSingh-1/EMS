import React, { useState } from "react";

const CreateTask = () => {
  const [admin, setAdmin] = useState("Admin");

  return (
    <>
      <div className="w-full">
        <div className="bg-[#1C1C1C] w-full p-3 pt-0 rounded">
          <h1 className="text-3xl mt-5 font-bold pb-3">Create Task </h1>
          <form className="flex flex-wrap w-full item-start rounded-lg p-5 justify-between">
            <div className="w-1/2 flex flex-col">
              <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-md  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
              <h3 className="text-lg text-gray-300 mb-0.5 mt-3">Date</h3>
              <input
                type="date"
                className="text-md  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
              <h3 className="text-lg text-gray-300 mb-0.5 mt-3">Assign To</h3>
              <input
                type="text"
                placeholder="Employee name"
                className="text-md  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
              <h3 className="text-lg text-gray-300 mb-0.5 mt-3">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc."
                className="text-md  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
            </div>
            <div className="w-2/5 flex flex-col">
              <h3 className="text-lg text-gray-300">Description</h3>
              <textarea
                rows={8}
                cols={30}
                className="bg-transparent border-2 border-gray-300 rounded-md w-full h-[27vh]"
              ></textarea>
              <button className="bg-emerald-400 py-3 mt-5 rounded-lg">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
