const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  cardstack: [
    { 
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId, 
      //The ObjectIds will refer to the ids in the Card model
      ref: "Card" 
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
