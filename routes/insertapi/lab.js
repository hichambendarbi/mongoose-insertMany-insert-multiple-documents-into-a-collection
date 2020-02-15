const express = require("express");
const route = express.Router();
const Lab = require("../../models/Lab");
const config = require("config");
const dbLabs = config.get("labs");
//  @route   POST insertapi/lab
//  @desc    insert all labs
route.post("/", async (req, res) => {
  //   const doc1 = { name: "hicham" };
  //   const doc2 = { name: "simo" };
  try {
    var newLab = [];
    for (var i = 0; i < dbLabs.length; i++) {
      newLab = new Lab({
        identification: {
          name: dbLabs[i].name
        },
        contact: {
          tele: dbLabs[i].tele,
          fax: dbLabs[i].fax,
          city: dbLabs[i].city,
          adress: dbLabs[i].adress
        }
      });
      await newLab.save();
      console.log(newLab);
    }
  } catch (err) {
    console.error(err.message);
  }

  // return Lab.insertMany(dbLabs)
  //   .then(result => {
  //     return res.json(result);
  //   })
  //   .catch(err => console.error(`Failed to insert documents: ${err}`));
});

module.exports = route;
