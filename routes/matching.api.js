const express = require("express");
const router = express.Router();

/**
 * @route POST /mathching/request
 * @description Renter send a request to Jobber
 * @body {to: Jobber Id}
 * @access Login required
 */

/**
 * @route GET /mathching/request
 * @description Get a list request from Renter to Jobber
 * @body {}
 * @access Login required
 */

/**
 * @route PUT /mathching/request/:carId
 * @description Accept/Decline the request
 * @body {status: "accepted" or "declined"}
 * @access Login required
 */

/**
 * @route DELETE /mathching/request/:carId
 * @description Remove a request
 * @body {}
 * @access Login required
 */

module.exports = router;
