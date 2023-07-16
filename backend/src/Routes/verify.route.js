import { verify } from "../Controllers/verify.js";
import catchAsyncErrors from "../Service/catchAsyncErrors.js";
import express from "express";

const router = express.Router();

router.get("/", catchAsyncErrors(verify));

export default router;
