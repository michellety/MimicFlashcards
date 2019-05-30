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
      .sort ({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //creates a new card and associates it with the user id
  create: function (req, res) {
    db.Card
      .create(req.body)
      .then(function(dbCard){
        return db.User.findOneAndUpdate({ _id: req.params.id}, { $push: { cardstack: dbCard._id}}, { new: true });
      })
      .then(function(dbUser) {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },

  // ///adds new cards to the user
  update: function (req, res) {
    db.Card
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(updateCardstack => {
        // TODO: 
        //pass in some id into the function
        //add new to the cardstack
        db.User.findById({ _id }, { $push: { cardStack: updateCardstack._id }}, { new: true });
        res.json(updateCardstack)
      })
      .catch(err => res.status(422).json(err));
  },


  remove: function(req, res) {
    db.Card
      .findById({ _id: req.params.id })
      .then(cardModel => {
        db.User.remove(cardModel.remove());
      })
      .then(cardModel => res.json(cardModel))
      .catch(err => res.status(422).json(err));
  }
};
