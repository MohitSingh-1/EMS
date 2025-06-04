import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen overflow-auto'>
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <h1>{console.log(data)}</h1>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
