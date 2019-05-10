const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Cards collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languagecards"
);

const cardSeed = [
  {
    word: "Hi",
    translated: "Hej",
    date: new Date(Date.now())
  },
  {
    word: "Thanks",
    translated: "Tak",
    date: new Date(Date.now())
  },
  {
    word: "Excuse me",
    translated: "Undskyld mig",
    date: new Date(Date.now())
  }
];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });