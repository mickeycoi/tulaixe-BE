const { AppError, sendResponse, catchAsync } = require("../helpers/utils");
const User = require("../models/User");
const bycrypt = require("bcryptjs");
const authConttroller = {};

authConttroller.loginWithEmail = catchAsync(async (req, res, next) => {
//get data from request
  const { email, password } = req.body;

//Business Logic validator
  const user = await User.findOne({ email }, "+password");
  if (!user)
    return next(new AppError(400, "Invalid credentials", "Login Error"));
  const isMatch = await bycrypt.compare(password, user.password);
  if (!isMatch) return next(new AppError(400, "Wrong password", "Login Error"));

  accsesToken = await user.generateToken();
  return sendResponse(
    res,
    200,
    true,
    { user, accsesToken },
    null,
    "Login successful"
  );
});

module.exports = authConttroller;
