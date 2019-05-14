const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  word: { type: String, required: true },
  translated: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
