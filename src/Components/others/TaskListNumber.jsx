import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-wrap gap-8 mt-8 justify-between'>
      <div className='bg-emerald-400  w-[45%] md:w-[22%] px-4 py-9 rounded-xl'>
        <h2 className='font-bold text-3xl'>{data.taskCount.active}</h2>
        <h3 className='font-semibold text-2xl'>Active</h3>
      </div>
      <div className='bg-blue-400 w-[45%] md:w-[22%] px-4 py-9 rounded-xl'>
        <h2 className='font-bold text-3xl'>{data.taskCount.newTask}</h2>
        <h3 className='font-semibold text-2xl'>New Task</h3>
      </div>
      <div className='bg-yellow-400 text-black w-[45%] md:w-[22%] px-4 py-9 rounded-xl'>
        <h2 className='font-bold text-3xl'>{data.taskCount.completed}</h2>
        <h3 className='font-semibold text-2xl'>Completed</h3>
      </div>
      <div className='bg-red-400 w-[45%] md:w-[22%] px-4 py-9 rounded-xl'>
        <h2 className='font-bold text-3xl'>{data.taskCount.failed}</h2>
        <h3 className='font-semibold text-2xl'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
