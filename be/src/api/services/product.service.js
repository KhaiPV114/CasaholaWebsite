import { productRespository } from "../repositories/index.js";
import InternalServerError from "../utils/response/InternalServerError.js";
import ResponseDataSuccess from "../utils/response/ResponseDataSuccess.js";

const search = async (filters, options) => {
  try {
    const queryFilters = {};

    if (filters.searchText) {
      const searchPattern = filters.searchText
        .split(" ")
        .map((word) => `(${word})`)
        .join("|");
      queryFilters.name = { $regex: searchPattern, $options: "i" };
    }

    if (filters.categoryId) {
      queryFilters.category = filters.categoryId;
    }

    const sortOption = options.sort === "desc" ? -1 : 1;

    const res = await productRespository.search(queryFilters, {
      ...options,
      sort: sortOption,
    });
    return new ResponseDataSuccess(res);
  } catch (error) {
    console.log(error);

    return new InternalServerError(error);
  }
};

const create = async (req) => {
  try {
    const request = await productRespository.create(req.body);
    return new ResponseDataSuccess(request);
  } catch (error) {
    return new InternalServerError(error);
  }
};

export default { search, create };
