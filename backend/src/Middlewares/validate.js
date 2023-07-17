import joi from "joi";
import Errorhandler from "../../../config/Error.js";

export function Loginschema(req, res, next) {
  const schema = joi.object({
    email: joi
      .string()
      .required()
      .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      .message("Invalid Email"),
    password: joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    console.log(error.details);
    next(new Errorhandler(400, error.details.map((m) => m.message).join(",")));
  }

  next();
}

export function SignUpschema(req, res, next) {
  var schema;
  if (req.body.registerType === "Organization") {
    schema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      companyName: joi.string().required(),
      companyOrgNo: joi.string().required(),
      country: joi.string().required(),
      city: joi.string().required(),
      email: joi
        .string()
        .required()
        .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
      password: joi
        .string()
        .required()
        .min(8)
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    });
  } else {
    schema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      email: joi
        .string()
        .required()
        .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
      password: joi
        .string()
        .required()
        .min(8)
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    });
  }
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw next(new Errorhandler(400, error.details.map((m) => m.message).join(",")));
  }
  next();
}
