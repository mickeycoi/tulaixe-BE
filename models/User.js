const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, select: false },
    avatar: { type: String, require: false, default: "" },
    driverLicense: { type: String, require: false, default: "" },
    carCount: { type: Number, default: 0 },
    countRent: { type: Number, default: 0 },
    phoneNumber: { type: Number, require: false, default: "" },
    birthDay: { type: Date, require: false, default: "" },
    gender: { type: String, enum: ["male", "female"] },
    isDeleted: { type: Boolean, default: false, select: false },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this._doc;
  delete user.password;
  delete user.isDeleted;
  return user;
};

userSchema.methods.generateToken = async function () {
  const accessToken = await jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return accessToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
