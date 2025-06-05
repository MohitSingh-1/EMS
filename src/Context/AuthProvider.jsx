import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';


export const AuthContext = createContext();

const AuthProvider = (props) => {

  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    const data = getLocalStorage();
    // const admin = getLocalStorage('admin');
    // console.log(data.employees);
    setUserData(data.employees);
  },[])

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {props.children}  
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
