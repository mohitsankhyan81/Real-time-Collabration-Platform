import { Conv } from "../model/conversesation_model.js";
import { Mess } from "../model/message_model.js";

export const sendmessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const {id:reciverid}=req.params;
        console.log(message);
        console.log(reciverid);
        const senderid=req.user._id;
        console.log(senderid);
        let conversation = await Conv.findOne({
            members: { $all: [senderid, reciverid] }
        });

        if (!conversation) {
            conversation = await Conv.create({
                members: [senderid, reciverid],
                message: []
            });
        }

        const newMessage = await Mess.create({
            senderid,
            reciverid,
            message
        });

        conversation.message.push(newMessage._id);

        await conversation.save();

        return res.status(200).json({
            message: "Message sent successfully",
            newMessage
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({error:error.message})
    }
}

export const getmessage=async(req,res)=>{
    try{
        const {id:chatUser}=req.params;
        const senderid=req.user._id;
        const conversation=await Conv.findOne({
            members:{$all:[senderid,chatUser]}
        }).populate("message")

        if(!conversation){
            return res.status(201).json([]);
        }
        const message=conversation.message;
        res.status(201).json({message:message});

    }
    catch(error){
        return res.status(500).json({message:error.message});
    }
}