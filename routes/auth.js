const express = require('express');

const router = express.Router();

const {register, forgetPassword, login, resetPassword} = require ('../controllers/auth');

router.route("/register").post(register);
router.route("/login").post(login);
router.route('/forget-password').post(forgetPassword);
router.route('/reset-password/:restToken').post(resetPassword);


module.exports = router;