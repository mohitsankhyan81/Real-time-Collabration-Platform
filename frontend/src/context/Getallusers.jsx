import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import axios from 'axios';

const useAllUsers = () => {
  const [allUsers, setallusers] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getuser = async () => {
      setloading(true);
      try {
        const token = Cookies.get("jwt");

        const res = await axios.get(
          "http://localhost:3000/api/user/alluser",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setallusers(res.data.user);
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    };

    getuser();
  }, []);

  return [allUsers, loading];
};

export default useAllUsers;