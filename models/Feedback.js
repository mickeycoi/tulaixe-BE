const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = Schema(
  {
    author: { type: Schema.ObjectId, required: false, ref: "User" },
    comment: { type: String, required: false },
    toCar: { type: Schema.ObjectId, required: false, ref: "Car" },
    ratePoint: { type: Number, enum: [0, 1, 2, 3, 4, 5] },
    isDeleted: { type: Boolean, default: false, select: false },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
