import { HttpStatusCode } from "axios";
import { categoryService } from "../services/index.js";
import pick from "../utils/pick.js";

const findAll = async (req, res) => {
  const filters = pick(req.query, []);
  const options = pick(req.query, ["page", "pageSize"]);
  const data = await categoryService.search(filters, options);

  if (data.status === HttpStatusCode.Ok) {
    return res.status(data.status).send(data.data);
  }
  return res.status(data.status).send(data.message);
};

const create = async (req, res) => {
  const data = await categoryService.create(req);
  if (data.status === HttpStatusCode.Ok) {
    return res.status(data.status).send(data.data);
  }

  return res.status(data.status).send(data.message);
};
export default { findAll, create };
