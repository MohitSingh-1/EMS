import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = (props) => {
  

  return (
    <div className='p-10 bg-gradient-to-r  from-[#659436] to-[#496bf0]'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask/>
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
