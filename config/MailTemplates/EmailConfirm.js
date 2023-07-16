import { html } from "./main.js";

const EmailConfirm = (to, name, ButtonLink) => {
  const greeting = "Hi";
  const MainText = "Verify your Email address, Click on the button below to verify your Email address";
  const DetailText = [
    {
      bold: "Step 1",
      text: "After recieving the mail. Click on the button below to verify your email address",
    },
  ];

  const ButtonText = "Verify";
  const subject = "Verify your Email";

  const htmlCode = html(greeting, name, MainText, DetailText, ButtonText, ButtonLink);
  return {
    to: to,
    from: process.env.EMAIL_FROM,
    subject: subject,
    attachments: [
      {
        fileName: "",
        path: "",
        cid: "",
      },
    ],

    html: htmlCode,
  };
};

export default EmailConfirm;
