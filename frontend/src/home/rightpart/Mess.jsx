import React from 'react'

const Mess = () => {
  return (
    <div className="p-4 space-y-3">
      <div className="flex justify-start">
        <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
          Hello
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs">
          Hello
        </div>
      </div>

      <div className="flex justify-start">
        <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
          Kaise ho
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs">
          Thik hu
        </div>
      </div>

    </div>
  )
}

export default Mess
