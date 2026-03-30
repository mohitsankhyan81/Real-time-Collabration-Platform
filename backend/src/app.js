import express from "express"
import morgan from "morgan";
import connectdb from "./db/db.js";
import userrouter from "./router/user_route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import messageroute from "./router/message_route.js";
const app=express();
app.use(express.json());
app.use(morgan("dev"))
app.use(cookieParser());

app.use(cors({
    origin:process.env.FRONT_END,
    credentials:true
}))
connectdb();

app.use("/api/user",userrouter);
app.use("/api/message",messageroute)
export default app

