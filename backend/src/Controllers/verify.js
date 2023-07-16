import Errorhandler from "../../../config/Error.js";
import User from "../Model/User.js";
import { createHash } from "crypto";

export async function verify(req, res, next) {
  const id = req.query.id;
  const token = createHash("sha256").update(id).digest("hex");
  const user = await User.findOne({ mailToken: token, tokenExpiry: { $gt: Date.now() } });
  if (!user) {
    throw next(new Errorhandler(400, "Token Expired or is Invalid!"));
  }
  user.mailToken = "";
  user.tokenExpiry = "";
  user.verified = true;
  user.verifiedDate = Date.now();
  await user.save();
  return res.redirect(`/auth/login`);
}
