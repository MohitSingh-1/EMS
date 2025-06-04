import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);

  const detailedView = (e,emp)=>{
    console.log(emp);
  }

  return (
    <>
      <div className="bg-[#1C1C1C] rounded  w-full mt-5 p-5">
        <div className="flex justify-between bg-red-400  w-full mb-2 py-2 px-3 rounded text-center">
          <h2 className="text-lg font-medium w-1/6">Employee Name</h2>
          <h2 className="text-lg font-medium w-1/6">Active Task</h2>
          <h2 className="text-lg font-medium w-1/6">New Task</h2>
          <h2 className="text-lg font-medium w-1/6">Completed Task</h2>
          <h2 className="text-lg font-medium w-1/6">Failed Task</h2>
          <h2 className="text-lg font-medium w-1/6">Get Details</h2>
        </div>
        <div>
          {authData.employees.map((elem,idx) => {
            return (
              <div key={idx} className="flex justify-betweenbg-transparent border-2 border-emerald-500  w-full mb-2 py-2 px-3 rounded text-center">
                <h2 className="text-lg font-medium w-1/6">{elem.firstName}</h2>
                <h2 className="text-lg font-medium w-1/6 text-green-400">{elem.taskCount.active}</h2>
                <h2 className="text-lg font-medium w-1/6 text-blue-400">{elem.taskCount.newTask}</h2>
                <h2 className="text-lg font-medium w-1/6 text-yellow-400">{elem.taskCount.completed}</h2>
                <h2 className="text-lg font-medium w-1/6 text-red-400">{elem.taskCount.failed}</h2>
                <div className="w-1/6 flex justify-center">
                  <button onClick={(e)=>{
                    detailedView(e,elem);
                  }} className="bg-emerald-400 rounded-lg py-1 px-5">View</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTasks;
