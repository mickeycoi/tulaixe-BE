const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historyRentCarSchema = Schema(
  {
    from: { type: Schema.ObjectId, required: true, ref: "User" },
    to: { type: Schema.ObjectId, required: true, ref: "User" },
    car: { type: Schema.ObjectId, required: true, ref: "Car" },
    status: { type: String, enum: ["Cancel", "Finish", "Renting"] },
  },
  { timestamps: true }
);

const History = mongoose.model("History", historyRentCarSchema);

module.exports = History;
