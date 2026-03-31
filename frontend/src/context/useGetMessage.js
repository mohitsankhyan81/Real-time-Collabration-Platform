import { useEffect, useState } from 'react';
import useConversation from '../zustand/useConverrsation.js';
import axios from 'axios';

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { message, setMessage, selectedConversation } = useConversation();
    useEffect(() => {
        const getMessage = async () => {
            if (!selectedConversation?._id) return;

            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:3000/api/message/get/${selectedConversation._id}`,{
                    withCredentials:true
                });
                setMessage(res.data);
                console.log(res.data.message);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        getMessage();
    }, [selectedConversation]);

    return { loading, message };
};

export default useGetMessage;