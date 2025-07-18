
import { asyncHandler } from "../utils/asyncHandalar";
import { ApiError } from "../utils/ApiError";
import { findUserByEmail, isPasswordCorrect } from "../models/user.models";


const generateAccessTokenAndRefreshToken = 
    async (u) => {
        try{
            const accessToken = user.generateAccessToken();
            const refreshToken = user.generateRefreshToken();
            user.refrashToken = refreshToken;
            await updateUserRefreshToken(user.email, refreshToken);
            return { accessToken, refreshToken };
        }catch(error) {
            console.error("Error generating tokens:", error);
            throw new ApiError(500, "Internal server error");
        }
    }


const userSignin  = asyncHandler( async (req,res) => {
    const {email, userpassword} = req.body;
    if(!email){
        throw new ApiError(400, "email is required");
    }
    if(!userpassword){
        throw new ApiError(400,"Password is Required");
    }

    const user = findUserByEmail(email);
    if(!user){
        throw new ApiError(404, "user not found");
    }
    const isValid = isPasswordCorrect(email,userpassword);
    if(!isValid){
        throw new ApiError(401,"Invalid Password");
    }

    const  {refreshToken , accessToken } = await generateAccessTokenAndRefreshToken(user)

    const { password, refrashToken, ...userWithoutSensitive } = user;

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(true, 
            "User logged in successfully",
            {
                user : logggedInUser,accessToken,refreshToken
            }
            , userWithoutSensitive)
        
    )
    }
)

export {userSignin};