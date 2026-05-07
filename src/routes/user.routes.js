import { Router } from "express";
import { loginUser, logoutUser, registerUser,refreshAccessToken } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//router.route("/register").post(registerUser); but hme file upload krn hai toh multer middlerware use hoga before going to registerUser controller function so we will use upload.fields() middleware to handle the file upload and then we will pass the registerUser controller function as the second argument to the post method of the router.route() method
router.route("/register").post(upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
]),    registerUser);

router.route("/login").post(loginUser)
//secured routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
//is route me jwt lgane ka need nhi hai ecoz we already decode it inside controller

export default router;