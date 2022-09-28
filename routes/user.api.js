const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validator");
const authentication = require("../middlewares/authentication");

/**
 * @route POST /users
 * @description Register new account User
 * @body {name, email, password}
 * @access Public
 */
router.post(
  "/",
  validators.validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invalid password").exists().notEmpty(),
  ]),
  userController.register
);

/**
 * @route GET /users/me
 * @description Get info of a User
 * @body {}
 * @access Login required
 */
router.get("/me", authentication.loginRequired, userController.getUserMe);

/**
 * @route GET /users/:userId
 * @description Get info of another User
 * @body {}
 * @access Login required
 */
router.get(
  "/:userId",
  validators.validate([
    param("userId").exists().isString().custom(validators.checkObjectId),
  ]),
  userController.getSingleUser
);

/**
 * @route PUT /users/:userId
 * @description Update info of a User
 * @body {name, avatar, password, birthday, gender, phoneNumber}
 * @access Login required
 */

router.put(
  "/:userId",
  authentication.loginRequired,
  validators.validate([
    param("userId").exists().isString().custom(validators.checkObjectId),
  ]),
  userController.updateProfile
);

module.exports = router;
