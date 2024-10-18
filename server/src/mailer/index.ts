import nodemailer from "nodemailer";
import { AUTH_PASSWORD, AUTH_USERNAME } from "./constants/env";
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: AUTH_USERNAME,
    pass: AUTH_PASSWORD,
  },
});
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"MATEUSZ" <m.zaniewski1995@gmail.com>', // sender address
    to: "wiracem385@adosnan.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
