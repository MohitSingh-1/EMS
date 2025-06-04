import React, { useEffect, useState } from "react";

const Card = ({task,status}) => {


  return (
    <>
      <div className={`flex-shrink-0 bg-white text-black rounded-xl h-full w-[23%]`}>
        <div className="flex p-5 justify-between items-center  ">
          <h3
            className={`text-base font-semibold ${status.color} py-1 px-3 rounded`}
          >
            {task.category}
          </h3>
          <h4 className="text-sm font-semibold">{task.taskDate}</h4>
        </div>
        <div className="mx-5 ">
          <h2 className="text-2xl font-semibold">{task.taskTitle}</h2>
          <p className="mt-3 text-sm">{task.taskDescription}</p>
        </div>
        <div className="mt-12">
          <button className={`w-full ${status.color} font-semibold text-xl -rotate-6 rounded-full`}>{status.st}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
