import { json, urlencoded, static as expressStrict } from "express";
import morgan from "morgan";
import cors from "cors";
import { join } from "path";
import expressRateLimit from "express-rate-limit";
import fileDirName from "../../../utils/file-dir-name.js";
const { __dirname } = fileDirName(import.meta);
const globalMiddleware = [
  json({ urlencoded: false, limit: "100mb" }),
  urlencoded({ extended: true }),
  morgan("dev"),
  cors(),
  expressStrict(join(__dirname, "/../../public")),
  expressRateLimit({
    windowMs: 1 * 60 * 1000, // 1 Munite
    max: 1000, // How many Request Excepted Each 1 Munite
    message: "Too many request from this IP, please try again after 10 Munite",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  }),

  (req, res, next) => {
    req.file_url = `${__dirname}/../../public/uploads`;

    switch (req.get("host")) {
      case "localhost:3000":
        req.server_url = `${process.env.LOCAL_PROTOCOL}://${req.get("host")}`;
    }

    next();
  },
];
export default globalMiddleware;
