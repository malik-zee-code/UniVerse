import { Schema, model } from "mongoose";
import { genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";
import { randomBytes, createHash } from "crypto";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  mailToken: {
    type: String,
    default: "",
    select: false,
  },
  tokenExpiry: {
    type: Date,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verfiedDate: {
    type: Date,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  this.password = await hash(this.password, salt);
});

UserSchema.methods.getJwtToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("jwtSecret"), { expiresIn: 3600 });
  return token;
};

UserSchema.methods.generateToken = function () {
  const token = randomBytes(20).toString("hex");
  this.mailToken = createHash("sha256").update(token).digest("hex");
  this.tokenExpiry = Date.now() + 1000 * 60 * 15;
  return token;
};

const userModel = new model("user", UserSchema);
export default userModel;
