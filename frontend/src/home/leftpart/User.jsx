import React from 'react';

const User = ({ user }) => {
  return (
    <div className="flex items-center gap-4 p-3 bg-blue-400/90 hover:bg-blue-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer">
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
  );
};

export default User;