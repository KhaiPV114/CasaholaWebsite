import { HttpStatusCode } from "axios";
import { productService } from "../services/index.js";
import pick from "../utils/pick.js";

const findAll = async (req, res) => {
  const filters = pick(req.query, ["searchText", "categoryId"]);
  const options = pick(req.query, ["page", "pageSize", "sort"]);

  const data = await productService.search(filters, options);
  return res.status(data.status).send(data.data);
};

const create = async (req, res) => {
  const data = await productService.create(req);
  if (data.status === HttpStatusCode.Ok) {
    return res.status(data.status).send(data.data);
  }
  return res.status(data.status).send(data.error);
};
export default { findAll, create };
