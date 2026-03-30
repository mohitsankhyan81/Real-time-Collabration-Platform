import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/Right.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { Toaster } from "react-hot-toast";
import { Routes,Route } from 'react-router-dom'
import { useAuth } from './context/AuthProvider.jsx'
const App = () => {
  const [authUser,setauthUser]=useAuth();
  console.log(authUser);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Login />
          )
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  )
}

export default App
