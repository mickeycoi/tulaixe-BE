const express = require("express");
const router = express.Router();
const carController = require("../controllers/car.controller");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validator");
const authentication = require("../middlewares/authentication");

/**
 * @route POST /cars
 * @description Create a new car
 * @body {brand, model, color, image, seat, fuel, insurance, price}
 * @access Login required
 */
router.post(
  "/",
  authentication.loginRequired,
  validators.validate([
    body("brand", "Brand invalid").exists().notEmpty(),
    body("model", "Model invalid").exists().notEmpty(),
    body("color", "Color invalid").exists().notEmpty(),
    body("imageURL", "ImageURL invalid").exists().notEmpty(),
    body("location", "Location invalid").exists().notEmpty(),
    body("fuel", "Fuel invalid").exists().notEmpty(),
    body("insurance", "Insurance invalid").exists().notEmpty(),
    body("seat", "Seat invalid").exists().notEmpty(),
    body("deposit", "Deposit invalid").exists().notEmpty(),
    body("price", "Price invalid").exists().notEmpty(),
  ]),
  carController.creatNewCar
);

/**
 * @route GET /cars?page=1&limit=10
 * @description Get list of cars with pagination
 * @body {}
 * @access Login required
 */
router.get("/", carController.getListOfCar);

/**
 * @route GET /cars/:carId
 * @description Get a single car
 * @body {}
 * @access Login required
 */
router.get(
  "/:carId",
  validators.validate([
    param("carId").exists().isString().custom(validators.checkObjectId),
  ]),
  carController.getSingleCar
);

/**
 * @route PUT /cars/:carId
 * @description Update a single car
 * @body {name, model, color, image, seat, fuel, isAvalibale, insurance, price, rentCount}
 * @access Login required
 */
router.put(
  "/:carId",
  authentication.loginRequired,
  validators.validate([
    param("carId").exists().isString().custom(validators.checkObjectId),
  ]),
  carController.updateSingleCar
);

/**
 * @route DELETE /cars/:carId
 * @description Remove a car
 * @body {}
 * @access Login required
 */
router.delete(
  "/:carId",
  authentication.loginRequired,
  validators.validate([
    param("carId").exists().isString().custom(validators.checkObjectId),
  ]),
  carController.deleteSingleCar
);

module.exports = router;
