import { categoryRepository } from "../repositories/index.js";
import InternalServerError from "../utils/response/InternalServerError.js";
import ResponseDataSuccess from "../utils/response/ResponseDataSuccess.js";

const search = async (filters, options) => {
  try {
    const res = await categoryRepository.search(filters, options);
    return new ResponseDataSuccess(res);
  } catch (error) {
    return new InternalServerError(error);
  }
};

const create = async (req) => {
  try {
    const request = await categoryRepository.create(req.body);
    return new ResponseDataSuccess(request);
  } catch (error) {
    return new InternalServerError(error);
  }
};

export default { search, create };
