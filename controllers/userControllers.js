const { json } = require("express");
const db = require( "../backend/models/userModel.js")

// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    db
      .find()
      .then(data => {
        console.log(data);
       res.json(data);
      })
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    db
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
        console.log("from create", req);
    db
      .create(req.body)
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