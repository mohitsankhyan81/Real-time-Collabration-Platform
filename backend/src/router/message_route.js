import express from "express"
import { sendmessage } from "../controller/message_controller.js";

const messageroute=express.Router();

messageroute.post("/send/:id",sendmessage)
export default messageroute;