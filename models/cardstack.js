const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
const cardstackSchema = new Schema({
  card: [
    { 
      type: Schema.Types.ObjectId, 
      ref: "Card" 
    }
  ]
});


// This creates our model from the above schema, using mongoose's model method
const Cardstack = mongoose.model("Cardstack", cardstackSchema);

module.exports = Cardstack;