import React from 'react'
import { SendHorizontal } from 'lucide-react';
const TypeSend = () => {
  return (
    <div>
        <div className="flex items-center gap-2 px-2 py-1">

        <input 
            type="text" 
            placeholder="Type Your Message..."
            className="flex-1 px-4 py-2 border border-gray-600 text-sm hover:border border-gray-700"
        />

        <button className="p-2  hover:scale-105 transition">
            <SendHorizontal size={20} />
        </button>

        </div>
    </div>
  )
}

export default TypeSend
