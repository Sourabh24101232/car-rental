import express from "express";
import { getCars, getUserData, loginUser, registerUser } from "../controller/userController.js";
import { protect } from "../middleware/auth.js";

// Create a new Express router instance
const userRouter = express.Router();

userRouter.post("/register", registerUser);// Route to handle user registration
userRouter.post("/login", loginUser);// Route to handle user login
userRouter.get('/data',protect,getUserData);
userRouter.get('/cars',getCars);

// Export router so it can be used in server.js
export default userRouter;
