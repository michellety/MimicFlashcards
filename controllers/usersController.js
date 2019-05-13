const db = require("../models");
var jwt = require("jsonwebtoken");


module.exports = {
    login: function (req, res) {
        res.json({ oh: "no" })
    },
    signup: function (req, res) {
        db.UserSchema.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            userCreated: req.body.userCreated,
            cardstack: req.body.cardstack
        }).then(function (user) {
            var token = jwt.sign({ email: user.email }, "shhh");
            res.json({ email: user.email, token: token });
        });
    }
};