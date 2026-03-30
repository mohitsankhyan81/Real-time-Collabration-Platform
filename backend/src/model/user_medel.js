import mongoose, { model } from "mongoose"

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requird:true
    },
    confirmpassword:{
        type:String,
    }
},{timestamps:true})

export const User=mongoose.model("User",userSchema)