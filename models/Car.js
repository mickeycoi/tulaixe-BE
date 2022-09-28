const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = Schema(
  {
    licensePlate: { type: String, require: true },
    brand: { type: String },
    model: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    imageURL: { type: String, require: true },
    status: { type: String, enum: ["actived", "pending", "reject", "stop"] },
    location: { type: String },
    fuel: { type: String },
    seat: { type: Number },
    insurance: { type: String },
    deposit: { type: String },
    price: { type: Number, require: true },
    countRent: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false, select: false },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
