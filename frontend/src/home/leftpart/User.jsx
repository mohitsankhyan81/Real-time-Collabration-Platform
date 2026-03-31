import React from 'react';
import useConversation from '../../zustand/useConverrsation';

const User = ({ user }) => {
  console.log(user)
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id===user._id;
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-700":""}`} onClick={()=>setSelectedConversation(user)}>
    <div className="flex items-center gap-4 p-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer">
      <img
        src={user?.profilePic || "download (17).jpg"}
        alt="user"
        className="w-12 h-12 rounded-full object-cover border-2 border-white/40"
      />
      <div className="flex flex-col overflow-hidden">
        <h1 className="font-semibold text-white text-lg truncate">
          {user?.fullname}
        </h1>
        <span className="text-white/80 text-sm truncate">
          {user?.email}
        </span>
      </div>
      </div>

    </div>
  );
};

export default User;