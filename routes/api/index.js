const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users");
const practiceRoutes = require("./practice");

router.use("/cards", cardRoutes);

router.use("/users", userRoutes);

router.use("/practice", practiceRoutes);

module.exports = router;
