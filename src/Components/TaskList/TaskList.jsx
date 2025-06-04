import React, { useState } from "react";
import Card from "./TaskCard";
import FailedTask from '../Task/FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className="flex items-center overflow-x-auto justify-start flex-nowrap h-[55%] py-7 gap-10 mt-10 w-full">
      {data.tasks.map((task, idx) => (
        <Card
          task={task}
          key={idx}
          status={
            task.active?{st:'Active',color:'bg-green-400'}:
            task.newTask ? {st:'New Task',color:'bg-blue-400'}:
            task.completed ? {st:'Completed',color:'bg-yellow-400'}:
            {st:'Failed',color:'bg-red-400'}
          }
        />
      ))}
      </div>
  );
};

export default TaskList;
