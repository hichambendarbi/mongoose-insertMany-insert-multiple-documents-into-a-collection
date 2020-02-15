const express = require("express");
const route = express.Router();
const Lab = require("../../models/Lab");
const config = require("config");
const dbLabs = config.get("labs");
//  @route   POST insertapi/lab
//  @desc    insert all labs
route.post("/", (req, res) => {
  //   const doc1 = { name: "hicham" };
  //   const doc2 = { name: "simo" };

  return Lab.insertMany(dbLabs)
    .then(result => {
      return res.json(result);
    })
    .catch(err => console.error(`Failed to insert documents: ${err}`));
});

module.exports = route;
