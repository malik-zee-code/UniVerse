import express from "express";
import { Login, SignUp, forgotPasswordReq, resetPassword } from "../Controllers/auth.js";
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
 * @description Forgot Password
 * @Route [POST]- /api/auth/forgotPasswordReq
 * @Access public
 * @returns NOTHING - Sends an link to the requested mail
 */

router.post("/forgotPasswordReq", catchAsyncError(forgotPasswordReq));

/**
 * @description Forgot Password
 * @Route [POST]- /api/auth/forgotPassword
 * @Access public
 * @returns NOTHING - Sends an link to the requested mail
 */
router.post("/forgotPassword", catchAsyncError(resetPassword));
export default router;
