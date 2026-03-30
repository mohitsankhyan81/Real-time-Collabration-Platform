import mongoose from "mongoose";

const connversationSchema=new mongoose.Schema({
    members:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        }
    ],
    message:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mess",
        default:[]
        }
    ]   
},{timestamps:true})



export const Conv= mongoose.model("Conv",connversationSchema)