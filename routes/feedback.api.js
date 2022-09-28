const express = require("express");
const router = express.Router();

/**
 * @route POST /feedbacks
 * @description Create a feedback for a car have rent by Renter
 * @body {comment, ratePoint}
 * @access Login required
 */

/**
 * @route GET /feedbacks
 * @description GET a list feedback for a car have rent by Renter
 * @body {}
 * @access Login required
 */

/**
 * @route PUT /feedbacks/:carId
 * @description update a feedback for a car have rent by Renter
 * @body {comment, ratePoint}
 * @access Login required
 */

/**
 * @route DELETE /feedbacks/:carId
 * @description DELETE a feedback for a car have rent by Renter
 * @body {}
 * @access Login required
 */

module.exports = router;
