import createtokenandsavecookies from "../auth/generatetoken.js";
import { User } from "../model/user_medel.js";
import bcrypt from "bcrypt"
export const signup=async(req,res)=>{
    try{
        const {fullname,email,password,confirmpassword}=req.body;
        if(password!==confirmpassword){
            return res.status(400).json({error:"password do not match"})
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({error:"user already signup"});
        }
        const hashpass=await bcrypt.hash(password,10);
        const newUser=await User.create({fullname,email,password:hashpass});
        if(newUser){
             createtokenandsavecookies(newUser._id,res)
            res.status(200).json({message:"User Signup Successfully",newuser:newUser});
        }
    }
    catch(error){
    console.log("SERVER ERROR:", error.message);
    return res.status(500).json({ error: error.message });
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"user not signup"});
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Password is incorrect"});
        }
        await createtokenandsavecookies(user._id,res);
        return res.status(200).json({message:"User logged in successfully",user:user})
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}

export const logout=async(req,res)=>{
    try{
        res.clearCookie("jwt")
        return res.status(200).json({message:"User logout Successfully"});
    }
    catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const alluser=async(req,res)=>{
    try{
        console.log(req.body)
        const loginUser=req.user._id;
        console.log(loginUser);
        const filteruser=await User.find({
            _id:{$ne:loginUser},
        }).select("-password");
        return res.status(200).json({message:"all users",user:filteruser});
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}