import React from 'react'
import SearchUser from './SearchUser.jsx'
import Users from './Users.jsx'
import Logout from './Logout.jsx'
const Left = () => {
  return (
        <div className="w-[30%] h-screen flex flex-col bg-black">
        <div className="h-[10vh]">
            <SearchUser />
        </div>
        <div className="flex-1 overflow-y-auto">
            <Users />
        </div>
        <div className="h-[10vh]">
            <Logout />
        </div>

        </div>
  )
}

export default Left
