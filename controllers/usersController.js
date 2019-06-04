const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
  login: function (req, res) {
    const { email, password, userName } = req.body;

    db.User
      .findOne({ email })
      .then(dbModel => {
        if (!dbModel) {
          return res.status(404).json({
            error: "Email and password must match"
          });
        }

        bcrypt.compare(password, dbModel.password, function (err, same) {
          if (err) {
            return res.status(500).json({
              error: "Something went wrong"
            })
          }
          if (!same) {
            return res.status(404).json({
              error: "Email and password must match"
            });
          } else {
            const { email, _id: id } = dbModel;
            const token = jwt.sign({ email, id }, process.env.SERVER_SECRET);
            return res.json({ id: dbModel._id, email: dbModel.email, userName, token })
          }
        })
      })
      .catch(err => res.status(422).json(err));
  },

  signup: function (req, res) {
    const { email, password, userName } = req.body;
    bcrypt.hash(password, 10, function (err, hash) {
      const user = {
        userName, 
        email,
        password: hash
      }
      db.User
        .create(user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })
  },

  // logout: function () {
  //   localStorage.removeItem("id_token");
  //   window.location.reload("/");
  // }
};