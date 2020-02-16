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
      var nameL = dbLabs[i].name;
      var nameL = nameL.replace("Laboratoire", " ");
      nameL = nameL.replace("d'Analyses Médicales", " ");
      nameL = nameL.replace("d'Analyses Médicales", " ");
      nameL = nameL.replace("Laboratoire d'Analyses Médicales", " ");
      nameL = nameL.replace("LABORATOIRE", " ");
      nameL = nameL.replace("Pharmacie", " ");
      nameL = nameL.trim();

      newLab = new Lab({
        identification: {
          name: nameL
        },
        contact: {
          teles: {
            fix: dbLabs[i].Fix,
            fax: dbLabs[i].fax
          },
          adress: {
            region: "",
            province: "",
            commune: "",
            street: dbLabs[i].address
          }
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
