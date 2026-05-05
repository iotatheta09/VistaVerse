import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../multer.middleware/multer.js";

const router = Router();

//router.route("/register").post(registerUser); but hme file upload krn hai toh multer middlerware use hoga before going to registerUser controller function so we will use upload.fields() middleware to handle the file upload and then we will pass the registerUser controller function as the second argument to the post method of the router.route() method
router.route("/register").post(upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
]),    registerUser);



export default router;