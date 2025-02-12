import { authService } from "../services/index.js";


const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await authService.login(email, password);
  return res.status(response.status).json(response);
};

const register = async (req, res) => {
  const data = req.body;
  const response = await authService.register(data);
  return res.status(response.status).json(response);
};

export default { login, register };
