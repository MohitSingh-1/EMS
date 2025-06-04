import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = (props) => {
  

  return (
    <div className='p-10 h-screen'>
      <Header data={props.data}/>
      <CreateTask/>
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
