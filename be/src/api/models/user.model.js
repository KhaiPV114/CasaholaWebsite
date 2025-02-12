import mongoose from "mongoose";

const Province = new mongoose.Schema(
  {
    provinceId: String,
    provinceName: String
  }, {
}, {
  _id: false
}
)

const District = new mongoose.Schema(
  { districtId: String, districtName: String }, {
  _id: false
}
)

const Ward = new mongoose.Schema(
  { wardId: String, wardName: String }, {
  _id: false
}
)

const deliveryAddressSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 10,
    },
    address: {
      type: String,
      required: true,
      maxlength: 255,
    },
    province: {
      type: Province,
      required: true,
    },
    district: {
      type: District, required: true,
    },
    ward: { type: Ward, required: true },

    isDefault: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    collection: "DeliveryAddress",
    timestamps: true,
    _id: false
  },
)


const userSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    fullName: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 8,
    },
    address: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số'],
    },
    deliveryAddress: [{ deliveryAddressSchema }],
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    collection: "User",
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "ph_users");

export default User;
export { deliveryAddressSchema }
