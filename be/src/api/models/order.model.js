import mongoose from "mongoose";
import { deliveryAddressSchema } from "./user";
import { type } from "os";

const itemSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },

  },
);

const paymentSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  transactionDate: {
    type: Date,
  },
  refunded: {
    type: Boolean,
    required: true,
  },
}
);

const shippingSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  method: {
    type: String,
  },
  fee: {
    type: Number,
  },
});



const orderSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    item: [item],
    orderBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deliveryAddress: [deliveryAddressSchema],
    payment: paymentSchema,
    status: String,
    shipping: shippingSchema,
    totalPrice: {
      type: Number,
      required: true,
    },
    approveBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    approveDate: {
      type: Date,
    }, acceptBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    acceptDate: {
      type: Date,
    },
  },
  {
    collection: "Order",
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema, "ph_orders");

export default Order;
export { itemSchema, paymentSchema };
