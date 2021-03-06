const bcrypt = require("bcryptjs");

const users = [
  {
    name: "travisAdmin User",
    email: "travis@travis.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Anthony",
    email: "Anthony@anthony.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Zach ",
    email: "zach@zach.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Frank",
    email: "frank@frank.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Kevin",
    email: "kevin@anthony.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
},

{
    name: "Kerishma",
    email: "kerishma@travis.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
},

{
    name: "Daniel",
    email: "daniel@travis.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
},
];

module.exports = users;
