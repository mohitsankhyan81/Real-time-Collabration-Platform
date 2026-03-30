import React from 'react'
import Cookies from "js-cookie"
import { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const initialUserState=Cookies.get("jwt") || localStorage.getItem("ChatApp");

    const [authUser,setauthUser]=useState(initialUserState ? JSON.parse(initialUserState) :null)
  return (
    <AuthContext.Provider value={[authUser,setauthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth=()=>useContext(AuthContext);