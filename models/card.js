const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  text: { type: String, required: true },
  translated: { type: String, required: true },
  language: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
