import React from 'react'

const ChatUser = () => {
  return (
    <div className="flex justify-center items-center h-24 bg-gray-800 hover:bg-gray-700 duration-300`">
      
      <div className="flex items-center gap-3">
        <img 
          src="download (17).jpg" 
          alt="user" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h1 className="font-semibold text-gray-200">
            Akhil
          </h1>
          <span className="text-sm text-gray-400">
            Offline
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChatUser