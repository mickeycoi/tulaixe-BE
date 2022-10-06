const { catchAsync, sendResponse, AppError } = require("../helpers/utils");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const userController = {};

//Register new account
userController.register = catchAsync(async (req, res, next) => {
  let { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) throw new AppError(400, "Email alredy exit", "Register Error");

  const salt = await bcryptjs.genSalt(10);
  password = await bcryptjs.hash(password, salt);
  user = await User.create({ name, email, password });
  const accessToken = await user.generateToken();

  sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "Create User Successfull"
  );
});

// Get userMe
userController.getUserMe = catchAsync(async (req, res, next) => {
  const curentUserId = req.userMyId;
  const user = await User.findById(curentUserId);
  if (!user) throw new AppError(400, "User not found", "Get User Me Error");
  return sendResponse(res, 200, true, user, null, "Get UserMe Successful");
});

// Get Single User
userController.getSingleUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  if (!user) throw new AppError(400, "User not found", "Get Single User Error");
  return sendResponse(res, 200, true, user, null, "Get Single User Successful");
});

//Update User Profile
userController.updateProfile = catchAsync(async (req, res, next) => {
  const currentUserId = req.userMyId;
  const userId = req.params.userId;
  // const filter = req.body.toJSON();
  // console.log("filer", filter);

  if (currentUserId !== userId)
    throw new AppError(400, "Permission required", "Update profile error");

  let user = await User.findById(userId);
  if (!user) throw new AppError(400, "User not found", "Update profile error");
  const allowsUpdate = ["name", "avatar", "birthday", "gender", "phoneNumber"];
  allowsUpdate.forEach((field) => {
    if (req.body[field] !== undefined) {
      user[field] = req.body[field];
    }
  });
  await user.save();
  return sendResponse(res, 200, true, user, null, "Update profile successful");
});

module.exports = userController;
