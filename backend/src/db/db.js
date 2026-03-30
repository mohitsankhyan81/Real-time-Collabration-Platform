import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectdb=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }
    catch(error){
        console.log("Database error"+error.message)
    }
}

export default connectdb