import express from "express";
import authRoute from "./auth.route.js";
import verifyRoute from "./verify.route.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/verify", verifyRoute);

export default router;
