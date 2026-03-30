import jwt from "jsonwebtoken"

const createtokenandsavecookies=(userid,res)=>{
    const token=jwt.sign({id:userid},process.env.JWT_SECRET,{
        expiresIn:"365d"
    })

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    })
}

export default createtokenandsavecookies;