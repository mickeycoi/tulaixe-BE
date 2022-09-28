const express = require("express");
const router = express.Router();

/**
 * @route POST /cars
 * @description Create a new car
 * @body {name, model, color, image, seat, fuel, isAvalibale, insurance, price, rentCount}
 * @access Login required
 */

/**
 * @route GET /cars?page=1&limit=10
 * @description Get list of cars with pagination
 * @body {}
 * @access Login required
 */

/**
 * @route GET /cars/:carId
 * @description Get a single car
 * @body {}
 * @access Login required
 */

/**
 * @route PUT /cars/:carId
 * @description Update a single car
 * @body {name, model, color, image, seat, fuel, isAvalibale, insurance, price, rentCount}
 * @access Login required
 */

/**
 * @route DELETE /cars/:carId
 * @description Remove a car
 * @body {}
 * @access Login required
 */

module.exports = router;
