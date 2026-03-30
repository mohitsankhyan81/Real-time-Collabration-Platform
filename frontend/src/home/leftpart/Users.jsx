import React from 'react';
import User from "./User.jsx";
import useAllUsers from '../../context/Getallusers.jsx';

const Users = () => {
  const [alluser, loading] = useAllUsers();

  return (
    <div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 pt-6 pl-6">
        Message
      </h1>

      <div className='overflow-y-auto space-y-1'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          alluser.map((user) => (
            <User key={user._id} user={user} />
          ))
        )}
      </div>
    </div>
  );
};

export default Users;