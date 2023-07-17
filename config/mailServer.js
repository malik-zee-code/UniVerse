import { createTransport } from "nodemailer";
import config from "config";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.get("user"),
    pass: config.get("pass"),
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Error Accoured while connecting to mailserver", error);
  } else {
    console.log(`Mail Transporter Connected - Server is ready to messages`);
  }
});

export default transporter;
