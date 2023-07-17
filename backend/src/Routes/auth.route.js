import express from "express";
import { Login, SignUp, forgotPasswordReq, resendVerificationToken, resetPassword } from "../Controllers/auth.js";
import catchAsyncError from "../Service/catchAsyncErrors.js";
import { Loginschema, SignUpschema } from "../Middlewares/validate.js";
const router = express.Router();

/**
 * @description Logs in User
 * @Route [POST]- /api/auth/login
 * @Access public
 * @returns {Token}
 */
router.post("/login", Loginschema, catchAsyncError(Login));

/**
 * @description Logs in User
 * @Route [POST]- /api/auth/signup
 * @Access public
 * @returns NOTHING
 */

router.post("/signup", SignUpschema, catchAsyncError(SignUp));

/**
 * @description Forgot Password - Requests a link
 * @Route [POST]- /api/auth/forgotPasswordReq
 * @Access public
 * @returns NOTHING - Sends an link to the requested mail
 */

router.post("/forgotPasswordReq", catchAsyncError(forgotPasswordReq));

/**
 * @description Forgot Password - Resets passsword
 * @Route [POST]- /api/auth/forgotPassword
 * @Access public
 * @returns NOTHING - Sends an link to the requested mail
 */
router.post("/forgotPassword", catchAsyncError(resetPassword));

/**
 * @description Resend Verification link to Mail
 * @Route [POST]- /api/auth/resendVerification
 * @Access public
 * @returns NOTHING - Sends an link to the requested mail
 */
router.post("/resendVerification", catchAsyncError(resendVerificationToken));
export default router;
