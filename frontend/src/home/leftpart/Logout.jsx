import React from 'react'
import { LogOut } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

const Logout = () => {
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/user/logout", {
        withCredentials: true
      });

      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");

      toast.success(data?.message || "Logout successful");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className='h-[10vh] pt-7 pl-5'>
      <button
        onClick={handlelogout}
        className="p-2 bg-red-500 hover:bg-red-600 rounded-full transition"
      >
        <LogOut className="text-white w-5 h-5" />
      </button>
    </div>
  )
}

export default Logout