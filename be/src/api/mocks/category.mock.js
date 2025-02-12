import Category from "../models/category.js";

const mockCategories = [
  { name: "Electronics", status: "ACTIVE" },
  { name: "Clothing", status: "ACTIVE" },
  { name: "Books", status: "ACTIVE" },
];

const insertCategories = async () => {
  try {
    await Category.insertMany(mockCategories);
    console.log("Mock categories inserted successfully.");
  } catch (error) {
    console.error("Error inserting categories:", error.message);
  }
};

insertCategories();
