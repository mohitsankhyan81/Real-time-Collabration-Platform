import express from "express"
import { getmessage, sendmessage } from "../controller/message_controller.js";
import { secureRoute } from "../middleware/secureRoute.js";

const messageroute=express.Router();

messageroute.post("/send/:id",secureRoute,sendmessage)
messageroute.get("/get/:id",secureRoute,getmessage)
export default messageroute;