import express from "express"
import { alluser, login, logout, signup } from "../controller/user_controller.js";
import { secureRoute } from "../middleware/secureRoute.js";

const userrouter=express.Router();

userrouter.post("/signup",signup);
userrouter.post("/login",login);
userrouter.get("/logout",secureRoute,logout);
userrouter.get("/alluser",secureRoute,alluser);
export default userrouter