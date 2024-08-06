import express from "express";
import { registerUser, loginUser, logoutUser, getUser } from "../controllers/auth/authController.js"
import { authMiddlewares, permissionUser } from "../middlewares/auth/authMiddlewares.js";

const router = express.Router();

//auth
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/logout', logoutUser);
router.get('/auth/getuser', authMiddlewares, getUser);

//testing for middlewares permission users
router.get('/auth/test', authMiddlewares, permissionUser("admin"), (req, res) => {
    res.send("Succeed")
})

export default router;