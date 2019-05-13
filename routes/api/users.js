const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/cards"
router.route("/login").post(usersController.login);
router.route("/signup").post(usersController.signup);

module.exports = router;
