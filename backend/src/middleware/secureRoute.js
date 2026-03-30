import jwt from "jsonwebtoken"
import {User} from "../model/user_medel.js"

export const secureRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        console.log(token)
        if(!token){
            return res.status(401).json({message:"user not authenticated"})
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        const user=await User.findById(decode.id).select("-password");
        if(!user){
            return res.status(404).json("user not found");
        }

        req.user=user
        next();
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}