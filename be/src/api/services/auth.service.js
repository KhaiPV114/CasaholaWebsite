import { HttpStatusCode } from "axios";
import { authRepository } from "../repositories/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Unauthorized from "../utils/response/UnAuthorizedError.js";


const login = async (email, password) => {
  const account = await authRepository.findUserByEmail(email);

  if (!account) {
    return new Unauthorized();
  }

  const isPasswordValid = await bcrypt.compare(password, account.password);
  if (!isPasswordValid) {
    return new Unauthorized();
  }

  if (!account.isActive) {
    return new Unauthorized("Your account is not active");
  }

  const bodyForToken = {
    email: account.email,
    role: account.role,
  }

  const accessToken = jwt.sign(
    {
      email: account.email,
      role: account.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_LIFE }
  );

  const refreshToken = jwt.signjwt.sign(
    {
      email: account.email,
      role: account.role,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_LIFE }
  );
  return {
    status: HttpStatusCode.Ok,
    accessToken,
  };
};

const register = async (data) => {
  const account = await authRepository.findUserByEmail(data.email);

  if (account) {
    return {
      status: HttpStatusCode.Unauthorized,
      message: "Email was register!",
    };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  await authRepository.register(data);
  return { status: HttpStatusCode.Ok, message: "Create user successfully!" };
};

export default { login, register };
