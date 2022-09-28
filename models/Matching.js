const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchingSchema = Schema(
  {
    from: { type: Schema.ObjectId, required: true, ref: "User" },
    to: { type: Schema.ObjectId, required: true, ref: "User" },
    car: { type: Schema.ObjectId, required: true, ref: "Car" },
    status: { type: String, enum: ["pending", "accepted", "declined"] },
  },
  { timestaps: true }
);

const Matching = mongoose.model("Matching", matchingSchema);

module.exports = Matching;
