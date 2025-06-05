import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskAssignTo, setTaskAssignTo] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [newTask, setNewTask] = useState(null);
    
    const [userData, setUserData] = useContext(AuthContext);
    const data = userData;
    
  const submitHandler = (e)=>{
    e.preventDefault();
    
    setNewTask({taskTitle,taskDate,taskAssignTo,taskCategory,taskDescription,active:false,newTask:true,failed:false,completed:false});

    // console.log(data);


    userData.forEach(function(elem) {
      if(elem.firstName == taskAssignTo)
      {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask+1;
        // console.log(elem.tasks);
      }
    });
    // const admin = userData.admin;
    setUserData(data);
    console.log(data);

    setTaskAssignTo('');
    setTaskCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
  }

  return (
    <>
      <div className="w-full ">
        <div className="bg-black bg-opacity-20 backdrop-blur-lg w-full p-3 pt-0 rounded">
          <h1 className="text-3xl mt-5 font-bold py-3">Create Task </h1>
          <form onSubmit={(e)=>{
            submitHandler(e);
          }} className="sm:flex flex-wrap w-full item-start rounded-lg p-5 justify-between">
            <div className="sm:w-1/2 flex flex-col">
              <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value);
                }}
                required
                type="text"
                placeholder="Make a UI design"
                className="text-md  py-1 px-2 sm:w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
              <h3 className="text-lg text-gray-300 mb-0.5 mt-3">Date</h3>
              <input
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value);
                }}
                required
                type="date"
                className="text-md  py-1 px-2 sm:w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
              <h3 className="text-lg text-gray-300 mb-0.5 mt-3">Assign To</h3>
              <input
                value={taskAssignTo}
                onChange={(e)=>{
                  setTaskAssignTo(e.target.value);
                }}
                required
                type="text"
                placeholder="Employee name"
                className="text-md  py-1 px-2 sm:w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
              <h3 className="text-lg text-gray-300 mb-0.5 mt-3">Category</h3>
              <input
              value={taskCategory}
              onChange={(e)=>{
                setTaskCategory(e.target.value);
              }}
                type="text"
                placeholder="design, dev, etc."
                className="text-md  py-1 px-2 sm:w-4/5 rounded outline-none bg-transparent border-2 border-gray-300"
              />
            </div>
            <div className="sm:w-2/5 flex flex-col mt-4 sm:m-auto">
              <h3 className="text-lg text-gray-300">Description</h3>
              <textarea
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value);
              }}
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
