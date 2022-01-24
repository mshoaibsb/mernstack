const User = require('../models/User');
const ErrorResponse = require('../utils/errorRespose');
exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;
    try{
        const user = await User.create({
            username, email, password
        });
        sendToken(user, 201, res);
    } catch (error) {
        console.log("error is here")
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return next(new ErrorResponse("Please provide email and password", 400))
    }
    try {
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return next(new ErrorResponse("Invalid credentials", 404));
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return next(new ErrorResponse("Invalid credentials", 401));
        }
        sendToken(user, 200, res);
    } catch (error) {
        res.status(500).json({success:false, error: error.message});
    }
};

exports.forgetPassword = async (req, res, next) => {
    const {email} = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return next(new ErrorResponse("Email could not be send", 404))
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:3000/password-reset/${resetToken}`;
        
        const message = `
        <h1>you have requested a password reset</h1>
        <p>Please go to this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`
    }catch (error) {

    }
}

exports.resetPassword = (req, res, next) => {
    res.send("Reset Password Route");
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({success:true, token})
}