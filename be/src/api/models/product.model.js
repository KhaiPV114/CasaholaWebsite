import mongoose from "mongoose";
import { type } from "os";

export const ImageSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
});



const productSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
    },
    description: {
      type: String,
      default: null,
      required: false,
      maxlength: 1000
    },
    thumbnail: ImageSchema,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    optionIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Option",
      required: true,
    }],
    productVariants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    }],
    isHide: {
      type: Boolean,
      default: false,
    },
    variants: [VariantSchema]
  },
  {
    collection: "Product",
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema, "ph_products");

export default Product;
