import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dahsboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dahsboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  useEffect(()=>{
    // localStorage.clear();
    setLocalStorage();
    // getLocalStorage();
  },[]) 

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  // console.log(userData);
useEffect(() => {
  if (userData) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }
}, [userData]);

  const adminData = getLocalStorage().admin;
  
  const loginHandler = (email, password) => {
    if (userData) {
      const emp = userData.find((e) => e.email == email && e.password == password);
      const admin = adminData.find((e)=>e.email == email && e.password == password);
      if(emp){
        setUser("employee");
        setLoggedInUserData(emp);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" , data:emp}));
      }
      else if(admin){
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin',data:admin}))
      }else{
        alert("Invalid Credentials");
      }
    }
    else {
      alert("Invalid Credentials");
    } 
  };

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>: ""}
    </>
  );
};

export default App;
