import express from "express";
const router = express.Router();
import {register,login,getProfile,updateUserProfile,deleteUser,verifyOTP}  from "../controllers/userControllers.js";
import authenticateUser from "../middleware/authMiddleware.js";

router.post("/register", register);

router.post("/verify-otp", verifyOTP);

router.post("/login",login);

router.get('/profile', authenticateUser,getProfile);

router.put('/update', authenticateUser,updateUserProfile);

router.delete("/delete", authenticateUser, deleteUser);

export default router;