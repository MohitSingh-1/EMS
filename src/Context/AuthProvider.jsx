import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';


export const AuthContext = createContext();

const AuthProvider = (props) => {

  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    const {employees, admin} = getLocalStorage();
    setUserData({employees,admin});
  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {props.children}  
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
