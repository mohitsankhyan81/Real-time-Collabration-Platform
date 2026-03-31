import React from 'react'
import Mess from './Mess.jsx'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/loading.jsx';

const Message = () => {
  const {loading,message}=useGetMessage();
  console.log(message)
  return (
    <div className='' style={{minHeight:"calc"}}>
        {loading?(<Loading/>):(
          message.length>0 && message.map((message)=>{
            <Message key={message._id} message={message}/>
          })
        )}
        {!loading && message.length===0&&(
          <div className='text-center mt-[20%]'>
            Say! Hi to start the conversation.
          </div>
        )}
    </div>
  )
}

export default Message