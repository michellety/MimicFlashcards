const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const jwt = require("jsonwebtoken");


// Define middleware here, express can use json and send it to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

  // Add routes, both API and view
  app.use(routes);

  // Connect to the Mongo DB
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mimicDB")
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.error(err));

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
