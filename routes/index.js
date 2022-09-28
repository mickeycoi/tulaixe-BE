const { sendResponse, AppError } = require("../helpers/utils.js");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to CoderSchool!");
});

//feedbackApi
const authApi = require("./auth.api");
router.use("/auth", authApi);

// userApi
const userApi = require("./user.api");
router.use("/users", userApi);

//carApi
const carApi = require("./car.api");
router.use("/cars", carApi);

//matchingApi
const matchingApi = require("./matching.api");
router.use("/matchings", matchingApi);

//feedbackApi
const feedbackApi = require("./feedback.api");
router.use("/feedbacks", feedbackApi);

//historyApi
const historyApi = require("./historyRentCar.api");
router.use("/histories", historyApi);

module.exports = router;
