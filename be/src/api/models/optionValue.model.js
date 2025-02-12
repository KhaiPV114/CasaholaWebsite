import { kMaxLength } from "buffer";
import mongoose from "mongoose";

const optionValueSchema = new mongoose.Schema(
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
        isDelete: {
            type: String,
            default: false,
        },
    },
    {
        collection: "OptionValue",
        timestamps: false,
    }
);

const OptionValue = mongoose.model("OptionValue", optionValueSchema, "ph_optionValues");

export default OptionValue;
