import express from "express";
import { registerUser, loginUser, logoutUser, getUser } from "../controllers/auth/authController.js"
import { authMiddlewares } from "../middlewares/auth/authMiddlewares.js";

const router = express.Router();

//auth
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/logout', logoutUser);
router.get('/auth/getuser', authMiddlewares, getUser);

export default router;