const db = require("../models");

// Defining methods for the cardsController
module.exports = {
  findUserCards: function (req, res) {

    console.log(req.query.userId);
    db.User
      .findById(req.query.userId)
      .populate("cardstack")
      .then(function (dbUser) {
         dbUser ?  res.json(dbUser.cardstack) : res.json([]) 
        })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      })
  },


  ///change this to pull cards only associated with user Id 
  // console.log(req.query)
  //   db.Card
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  //finds card bases on card ID
  findById: function (req, res) {
    db.Card
      .findById(req.params.id)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //creates a new card and associates it with the user id
  create: function (req, res) {
    db.Card
      .create(req.body)
      .then(function (dbCard) {
        return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { cardstack: dbCard._id } }, { new: true });
      })
      .then(function (dbUser) {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },

  // creates new cards specific to the user
  update: function (req, res) {
    db.Card
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(updateCardstack => {
        //add newcard to the cardstack in the user collection
        db.User.findById({ _id }, { $push: { cardStack: updateCardstack._id } }, { new: true });
        res.json(updateCardstack)
      })
      .catch(err => res.status(422).json(err));
  },


  remove: function (req, res) {
    db.Card
      .findById({ _id: req.params.id })
      .then(cardModel => {
        db.User.remove(cardModel.remove());
      })
      .then(cardModel => res.json(cardModel))
      .catch(err => res.status(422).json(err));
  }


};
