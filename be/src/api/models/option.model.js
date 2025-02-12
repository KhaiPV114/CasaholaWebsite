import { kMaxLength } from "buffer";
import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
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
        optionValueIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "OptionValue",
        }],
        isHide: {
            type: String,
            default: true,
        },
        isDelete: {
            type: String,
            default: false,
        },
    },
    {
        collection: "Option",
        timestamps: false,
    }
);

const Option = mongoose.model("Option", optionSchema, "ph_options");

export default Option;
