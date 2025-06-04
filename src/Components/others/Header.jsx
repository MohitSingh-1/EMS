import React from "react";

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','');
    window.location.reload();
  }

  return (
    <>
      <div className="flex items-end justify-between pb-2">
        <h1 className="text-2xl font-medium">
          Hello, <br /> <span className="text-3xl font-semibold">{props.data.firstName}👋</span>
        </h1>
        <button onClick={logOutUser} className="text-lg bg-red-600 rounded-md text-white font-medium px-5 py-2">
          Log Out
        </button>
      </div>
      <hr/>
    </>
  );
};

export default Header;
