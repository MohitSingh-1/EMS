import React, { useState } from "react";
import Card from "./TaskCard";
import FailedTask from "../Task/FailedTask";
import NewTask from "../Task/NewTask";
import AcceptTask from "../Task/AcceptTask";
import CompleteTask from "../Task/CompleteTask";

const TaskList = ({ data }) => {
  const callme = (task, idx) => {
    
    try {
      if(task==null){}
      else if (task.active) {
      return <AcceptTask key={idx} task={task} />;
    } else if (task.newTask) {
      return <NewTask key={idx} task={task} />;
    } else if (task.completed == true) {
      return <CompleteTask key={idx} task={task} />;
    } else {
      return <FailedTask key={idx} task={task} />;
    }
    } catch (e) {
      console.log(e);
    }
    // else {
    //   return <Card
    //     task={task}
    //     key={idx}
    //     status={
    //       task.active
    //         ? { st: "Active", color: "bg-green-400" }
    //         : task.newTask
    //         ? { st: "New Task", color: "bg-blue-400" }
    //         : task.completed
    //         ? { st: "Completed", color: "bg-yellow-400" }
    //         : { st: "Failed", color: "bg-red-400" }
    //     }
    //   />;
    // }
  };

  return (
    <>
      <h1 className="mt-4 text-xl font-medium">All Tasks</h1>
      <div
        id="tasklist"
        className="flex flex-col sm:grid sm:grid-cols-2 sm:flex-row md:flex md:flex-row md:overflow-x-auto  items-center justify-start flex-nowrap h-[55%] py-7 gap-10 w-full"
      >
        {data.tasks.map((task, idx) => callme(task, idx))}
      </div>
    </>
  );
};

export default TaskList;
