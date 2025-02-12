import mongoose from "mongoose";
import { item } from "./order";

const cartSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        },
        items: [item],
    },
    {
        collection: "Cart",
        timestamps: false,
    }
);

const Cart = mongoose.model("Cart", cartSchema, "ph_carts");

export default Cart;
