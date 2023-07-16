import Errorhandler from "../../../config/Error.js";
import transporter from "../../../config/mailServer.js";
import User from "../Model/User.js";
import { compare, genSalt, hash } from "bcrypt";
import EmailConfirm from "../../../config/MailTemplates/EmailConfirm.js";

export async function Login(req, res, next) {
  const user = await User.findOne({ email: req.body.email }).select("+password");
  if (!user) {
    throw next(new Errorhandler(404, "User not found!"));
  }
  const isMatch = compare(req.body.password, user.password);
  if (!isMatch) {
    throw next(new Errorhandler(400, "Incorrect username or Password"));
  }
  if (!user.verified) {
    throw new Errorhandler(400, "User not verified. Please verify your email address ");
  }
  const token = user.getJwtToken();
  return res.status(200).send({ token });
}

export async function SignUp(req, res, next) {
  var user = await User.findOne({ email: req.body.email });
  if (user) {
    throw next(new Errorhandler(400, "User already registered with this email address"));
  }
  user = new User(req.body);
  const token = user.generateToken();
  await user.save();
  const mailLink = `${req.server_url}/api/v1/verify?id=${token}`;
  const mailOptions = EmailConfirm(user.email, user.firstName + " " + user.lastName, mailLink);
  transporter.sendMail(mailOptions);
  res.status(200).json({ msg: "A link has been sent to your email address. Please verify your email address " });
}

export async function forgotPasswordReq(req, res, next) {
  var user = await findOne({ email: req.body.email });
  if (!user) {
    throw next(new Errorhandler(400, "No user found with this email address"));
  }
  const token = user.generateToken();
  await user.save();
  const mailLink = `${req.server_url}/auth/change-password?id=${token}`;
  const mailOptions = {};
  transporter.sendMail();
  res.status(200).json({ msg: "A link has been sent to your email address. Please verify your email address " });
}

export async function resetPassword(req, res, next) {
  var user = await User.findOne({ mailToken: req.body.token });
  if (!user) {
    throw next(new Errorhandler(400, "Invalid token or Token is Expired"));
  }
  user.mailToken = "";
  user.tokenExpiry = "";
  const saltRounds = genSalt(10);
  user.password = hash(req.body.password, saltRounds);
  await user.save();
  res.status(200).send({ msg: "Password Successfully changed" });
}
