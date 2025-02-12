import Joi from "joi";
import httpStatus from "http-status";
import pick from "../utils/pick.js";

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message);

    return res.status(httpStatus.BAD_REQUEST).send({
      message: errorMessage,
    });
  }
  Object.assign(req, value);
  next();
};

export default validate;
