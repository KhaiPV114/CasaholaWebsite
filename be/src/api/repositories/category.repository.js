import pagination from "../helper/pagination.js";
import Category from "../models/category.js";

const search = async (filters, options) => {
  const { page, pageSize } = options;
  const { offset, limit } = pagination(page, pageSize);
  const rows = await Category.find().skip(offset).limit(limit);
  const count = await Category.countDocuments(filters);
  return {
    count,
    rows,
  };
};

const create = async (body) => {
  return await Category.create(body);
};

export default { search, create };
