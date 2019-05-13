const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users");
const practiceRoutes = require("./practice");
// const logoutRoutes = require("./logout");
// const signupRoutes = require("./signup");

// Card route
router.use("/cards", cardRoutes);

router.use("/users", userRoutes);

router.use("/practice", practiceRoutes);

// Login route
//router.use("/login", loginRoutes);

// Logout
//router.use("/logout", logoutRoutes);

// Signup
//router.use("/signup", signupRoutes);



module.exports = router;
