import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast";
import axios from "axios"
import { useAuth } from '../context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
const Signup = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [showconpassword, setshowconpassword] = useState(false);

  const {handleSubmit,register,watch,formState: { errors }} = useForm();
    const [authUser,setauthUser]=useAuth();
    const navigate=useNavigate();
const handleSignup = async (data) => {
  const userinfo = {
    fullname: data.fullname,
    email: data.email,
    password: data.password,
    confirmpassword: data.confirmpassword
  }

  try {
    const res = await axios.post(
      "http://localhost:3000/api/user/signup",
      userinfo,
      { withCredentials: true }
    );

    toast.success("Signup Successful 🎉");
    console.log(res.data);
    setauthUser(res.data)
    navigate("/login")
  } catch (error) {
    const msg = error.response?.data?.error || "Signup Failed";
    toast.error(msg);
    console.log("ERROR:", msg);
  }
};

  const password = watch("password");

  return (
    <div className="flex justify-center items-center h-screen bg-black">

      <form 
        onSubmit={handleSubmit(handleSignup)}
        className="bg-gray-900 p-6 rounded w-80 space-y-4 border border-gray-800"
      >

        <h1 className="text-xl font-bold text-center text-green-500">
          Collaborate With Us
        </h1>

        <h2 className="text-center text-gray-400">
          Signup
        </h2>

        <div>
          <input 
            type="text" 
            placeholder="Full Name"
            className="w-full bg-black border border-gray-700 px-3 py-2 rounded text-white"
            {...register("fullname", { required: "Enter Name" })}
          />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
        </div>

        <div>
          <input 
            type="email" 
            placeholder="Email"
            className="w-full bg-black border border-gray-700 px-3 py-2 rounded text-white"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email"
              }
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div>
          <div className="flex items-center border border-gray-700 px-3 py-2 rounded bg-black">
            <input 
              type={showconpassword ? "text" : "password"} 
              placeholder="Confirm Password"
              className="flex-1 bg-transparent outline-none text-white"
              {...register("confirmpassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match"
              })}
            />
            <button 
              type="button"
              onClick={() => setshowconpassword(!showconpassword)}
              className="text-gray-400"
            >
              {showconpassword ? <Eye size={18}/> : <EyeOff size={18}/>}
            </button>
          </div>
          {errors.confirmpassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-500 cursor-pointer hover:underline">
            Login
          </Link>
        </p>

        <button 
          type="submit"
          className="w-full bg-green-500 text-black py-2 rounded hover:bg-green-600"
        >
          Signup
        </button>

      </form>
    </div>
  )
}

export default Signup