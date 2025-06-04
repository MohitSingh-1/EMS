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
    getLocalStorage();
  },[])

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

useEffect(() => {
  if (authData) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }
}, [authData]);


  const loginHandler = (email, password) => {
    if (authData) {
      const emp = authData.employees.find((e) => e.email == email && e.password == password);
      const admin = authData.admin.find((e)=>e.email == email && e.password == password);
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
      {user == "admin" ? <AdminDashboard data={loggedInUserData}/> : user == "employee" ? <EmployeeDashboard data={loggedInUserData}/>: ""}
    </>
  );
};

export default App;
