
//verify isliye kyuki login time pe hm at rt dono user ko diye isse user login hua toh hm yhi dono pakar ke verify karenge ki user valid hai ya nahi aur agar valid hai toh uske hisab se response denge



//and if user is valid then we will set the new object user object in the request object (req.user) so that we can access it in the controller functions and if user is not valid then we will send unauthorized response to the client
//export const verifyjwt = asynchandler(async (req,res,next) => {
    //ab token ka access lena hai toh hm cookie se lenge kyuki hmne login time pe token cookie me set kiya tha toh hm cookie se hi token lenge
    //and token ka access req ke pass hai cookies ka access becoz we set cookieparser MW in app.js file so we can access cookies from req.cookies and it comes before any request
   //we do req.cookie.at becoz we add access token in cookie when we use return res in login fn 
    //if at na ho toh use header

    



import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})