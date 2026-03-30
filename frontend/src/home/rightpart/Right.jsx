import React from 'react'
import ChatUser from './ChatUser.jsx'
import Message from './Message.jsx'
import TypeSend from './TypeSend.jsx'

const Right = () => {
  return (
    <div className="flex  flex-col h-screen w-[70%] text-white bg-slate-900">
      <ChatUser />
      <div className="flex-1 overflow-y-auto p-4">
        <Message />
      </div>
      <div className="p-3">
        <TypeSend />
      </div>
    </div>
  )
}

export default Right
