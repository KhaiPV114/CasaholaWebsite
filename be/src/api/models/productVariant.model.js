import mongoose from "mongoose";
import { ImageSchema } from "./product.model";



const optionSelections = new mongoose.Schema({
    optionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option",
        required: true,
    },
    optionValueId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OptionValue",
        required: true,
    },
});



const productVariantSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
        },
        sku: {
            type: String,
            required: true,
        },
        optionSelections: [optionSelections],
        price: {
            type: Number,
            default: 0,
            required: true,
        },
        quantity: {
            type: Number,
            default: 0,
            required: true,
        },
        image: ImageSchema,
        isHide: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },

    },
    {
        collection: "productVariant",
        timestamps: true,
    }
);

const ProductVariant = mongoose.model("productVariant", productVariantSchema, "ph_productVariants");

export default ProductVariant;
