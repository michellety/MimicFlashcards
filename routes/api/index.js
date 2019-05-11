const router = require("express").Router();
const cardRoutes = require("./cards");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const signupRoutes = require("./signup");

// Card route
router.use("/cards", cardRoutes);

// Login route
//router.use("/login", loginRoutes);

// Logout
//router.use("/logout", logoutRoutes);

// Signup
//router.use("/signup", signupRoutes);



module.exports = router;
