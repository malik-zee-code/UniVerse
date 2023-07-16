import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "no.reply.wisetime@gmail.com",
    pass: "ajbewkbqqvljbnqq",
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
