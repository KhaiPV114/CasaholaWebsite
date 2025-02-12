import pagination from "../helper/pagination.js";
import Product from "../models/product.js";

const search = async (filters, options) => {
  const { page, pageSize, sort } = options;
  const { offset, limit } = pagination(page, pageSize);

  const sortCriteria = sort ? { price: sort } : { create_at: 1 };

  const rows = await Product.find(filters)
    .select("_id name category stock price images status description")
    .sort(sortCriteria)
    .skip(offset)
    .limit(limit)
    .populate("category", "name _id");
  const count = await Product.countDocuments(filters);
  return {
    count,
    rows,
  };
};

const create = async (body) => {
  return await Product.create(body);
};

export default { search, create };
