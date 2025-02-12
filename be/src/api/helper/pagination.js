const pagination = (page, pageSize) => {
  const offset = 0;
  if (page > 1) {
    offset = (page - 1) * pageSize;
  }
  return {
    offset,
    limit: pageSize,
  };
};

export default pagination;
