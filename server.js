import express from "express";
import next from "next";
import compression from "compression";
import errorMiddleware from "./backend/src/Middlewares/errorMiddleware.js";
import globalMiddleware from "./backend/src/Middlewares/globalMiddleware.js";
import indexRoute from "./backend/src/Routes/index.js";
import connectDB from "./config/db.js";
import transporter from "./config/mailServer.js";
import dotenv from "dotenv";

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  connectDB();
  server.use(compression());

  server.use(function (req, res, next) {
    req.url = req.originalUrl.replace("/nextjs_custom_server/_next", "/_next");

    next(); // be sure to let the next middleware handle the modified request.
  });
  server.use(globalMiddleware);
  server.get("/health", (req, res) => {
    res.json("Healthy~!!!");
  });

  server.use("/api/v1", indexRoute);
  server.get("/_next/", (req, res) => {
    handle(req, res);
  });

  server.all("*", (req, res) => {
    handle(req, res);
  });

  server.use(errorMiddleware);

  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server ready on ${port}`);
  });
});
