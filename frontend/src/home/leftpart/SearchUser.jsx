import React from 'react'
import {Search} from "lucide-react"
const SearchUser = () => {
  return (
    <div className='h-[10vh]'>
      <form className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-md w-full max-w-md">
        
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 rounded-xl outline-none text-gray-700 placeholder-gray-400"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl transition duration-200"
        >
          <Search size={20} />
        </button>

      </form>
    </div>
  )
}

export default SearchUser
