const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users");
const practiceRoutes = require("./practice");
const isAuthenticated = require("../../controllers/authentication");

router
    .use("/users", userRoutes)
    .use(isAuthenticated)
    .use("/practice", practiceRoutes)
    .use("/cards", cardRoutes);
    
module.exports = router;

