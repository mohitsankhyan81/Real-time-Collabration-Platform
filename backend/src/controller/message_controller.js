import { Conv } from "../model/conversesation_model.js";
import { Mess } from "../model/message_model.js";

export const sendmessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const {id:reciver}=req.params;

        const snederid=req.user._id;

        let convertion=await Conv.findOne({
            members:{
                $all:{senderid,reciverid}
            }
        })
        if(!convertion){
            convertion=await Conv.create({
                members:[senderid,reciverid],
            })
        }

        const newMessage=new Mess({
            senderid,
            reciverid,
            message
        })
    }
    catch(error){
        console.log("Error in the sendmessage ",error.message)
        return res.status(500).json({error:error.message});
    }
}