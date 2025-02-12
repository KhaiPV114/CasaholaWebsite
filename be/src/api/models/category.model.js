import { kMaxLength } from "buffer";
import mongoose from "mongoose";
import { type } from "os";

const categorySchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 40,
    },
    description: {
      type: String,
      required: false,
      maxlength: 255,
    },
    isHide: {
      type: String,
      default: false,
    },
  },
  {
    collection: "Category",
    timestamps: false,
  }
);

const Category = mongoose.model("Category", categorySchema, "ph_categories");

export default Category;
