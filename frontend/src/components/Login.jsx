import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"
import toast from "react-hot-toast"
import { useAuth } from '../context/AuthProvider.jsx'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
const Login = () => {
  const [showpassword, setshowpassword] = useState(false);
    const [authUser, setauthUser] = useAuth();  
    const navigate=useNavigate();  
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        data,
        { withCredentials: true }
      );
      localStorage.setItem("ChatApp",JSON.stringify(res.data));
      toast.success("Login Successful 🎉");
      console.log(res.data);
      setauthUser(res.data);
      navigate("/")
    } catch (error) {
      const msg = error.response?.data?.error || "Login Failed";
      toast.error(msg);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">

      <form 
        onSubmit={handleSubmit(handleLogin)}
        className="bg-gray-900 p-6 rounded w-80 space-y-4 border border-gray-800"
      >

        <h1 className="text-xl font-bold text-center text-green-500">
          Collaborate With Us
        </h1>

        <h2 className="text-center text-gray-400">
          Login
        </h2>

        <div>
          <input 
            type="email" 
            placeholder="Email"
            className="w-full bg-black border border-gray-700 px-3 py-2 rounded text-white"
            {...register("email", { required: "Email required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <div className="flex items-center border border-gray-700 px-3 py-2 rounded bg-black">
            <input 
              type={showpassword ? "text" : "password"} 
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-white"
              {...register("password", { required: "Password required" })}
            />
            <button 
              type="button"
              onClick={() => setshowpassword(!showpassword)}
              className="text-gray-400"
            >
              {showpassword ? <Eye size={18}/> : <EyeOff size={18}/>}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-green-500 hover:underline">
            signup
          </Link>
        </p>

        <button 
          type="submit"
          className="w-full bg-green-500 text-black py-2 rounded hover:bg-green-600"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default Login