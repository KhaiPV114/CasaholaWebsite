import mongoose from "mongoose";
import ROLES from "../constants/role";

const statusSchema = new mongoose.Schema({
    isBlocked: {
        type: Boolean,
        default: false,
        null: false,
    },
    reasonBlock: {
        type: String,
        default: "",
    }
});

const accountSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        username: {
            type: String,
            unique: true,
            required: true,
            maxlength: 30,
            minlength: 6,
        },
        password: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            maxlength: 30,
            minlength: 8,
        },
        status: statusSchema,
        role: {
            type: [String],
            default: ROLES.USER,
            required: true,

        },
        refreshToken: {
            type: String,
            required: true,
            null: false,
            unique: true,
        },
    },
    {
        collection: "Account",
        timestamps: true,
    }
);

const Account = mongoose.model("Account", accountSchema, "ph_accounts");

export default Account;