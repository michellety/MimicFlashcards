const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/cards"
router.route("/")
  .get(cardsController.findAll)

// Matches with "/api/cards/:id"
router.route("/:id")
  .post(cardsController.create)
  .get(cardsController.findById)
  .post(cardsController.update)
  .delete(cardsController.remove);

module.exports = router;
