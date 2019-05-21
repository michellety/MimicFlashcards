const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users");
const practiceRoutes = require("./practice");
// const isAuthenticated = require("../../controllers/authentication");

router.use("/users", userRoutes);

router.use("/cards", cardRoutes);
router.use("/practice", practiceRoutes);

module.exports = router;
