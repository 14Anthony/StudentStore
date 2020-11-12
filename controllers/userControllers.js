const { json } = require("express");
const db = require( "../backend/models/userModel.js")

// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    console.log('usercred',req.body);
    const email = req.body.email;
    const pswd = req.body.password;
    db
      .find({email: email})
      .then(data => {
        console.log('promise data', data[0].isAdmin);
        if(data.length === 0 ){
          res.send(false)
        }
        else{
          res.json({
            loggedIn: 'true',
            admin: data[0].isAdmin
          });
        }
      })
      .catch(err => res.send(err));
  },
  findById: function(req, res) {
    db
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
        console.log("from create", req.body);
    db
      .create(req.body.userCreds)
      .then(dbModel => {
        console.log('json undefinded', dbModel);
        res.send(dbModel);
      })
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};