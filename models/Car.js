const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    brand: { type: String, require: true, default: "" },
    model: { type: String, require: true, default: "" },
    color: { type: String, require: true, default: "" },
    imageURL: { type: String, require: true, default: "" },
    location: { type: String, require: true, default: "" },
    fuel: { type: String, require: true, default: "" },
    insurance: { type: String, require: true, default: "" },
    seat: { type: Number, require: true, default: 0 },
    deposit: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    countRent: { type: Number, require: false, default: 0 },
    isAvailable: { type: Boolean, require: false, default: true },
    isDeleted: { type: Boolean, default: false, select: false },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
