const db = require("../models");

// Defining methods for the cardsController
module.exports = {
  findAll: function (req, res) {
    db.Card
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Card
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Card
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Card
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(startCardstack => {
        // TODO: 
        //pass in some id into the function
        //add new to the cardstack
        db.User.findById({}, { $push: { cardStack: startCardstack._id } }, { new: true });
        res.json(startCardstack)
      })
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Card
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
