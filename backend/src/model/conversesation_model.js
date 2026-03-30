import mongoose from "mongoose";

const connversationSchema=new mongoose.Schema({
    memebers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    messages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mess",
        default:[]
    }
},{timestamps:true})



export const Conv= connversationSchema.model("Conv",connversationSchema)