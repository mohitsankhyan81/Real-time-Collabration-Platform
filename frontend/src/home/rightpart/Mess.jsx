import React from 'react'

const Mess = ({message}) => {
  const authuser=JSON.parse(localStorage.getItem("ChatApp"))
  console.log(message.senderid)
  return (
    <div className="p-4 space-y-3">
      <div className="flex justify-start">
        <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
          {message.message}
        </div>
      </div>

    </div>
  )
}

export default Mess
