const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/cards"
router.route("/")
//get all cardstack for the user logged in
  .get(cardsController.findUserCards);

// Matches with "/api/cards/:id"
router.route("/:id")
  .post(cardsController.create)
  .get(cardsController.findById)
  .post(cardsController.update)
  .delete(cardsController.remove);

module.exports = router;
