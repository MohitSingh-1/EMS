import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className={`flex-shrink-0 bg-blue-300 border-2 border-black text-black rounded-xl h-full sm:h-[110%] w-[90%] md:w-[43%] lg:w-[23%]`}>
        <div className="flex p-5 justify-between items-center  ">
          <h3
            className={`text-base font-semibold  py-1 px-3 rounded`}
          >
            {task.category}
          </h3>
          <h4 className="text-sm font-semibold">{task.taskDate}</h4>
        </div>
        <div className="mx-5 ">
          <h2 className="text-2xl font-semibold">{task.taskTitle}</h2>
          <p className="mt-3 text-sm">{task.taskDescription}</p>
        </div>
        <div className="mt-10 text-center">
          <button className={`bg-blue-500 font-medium py-1 px-2 text-sm rounded`}>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
