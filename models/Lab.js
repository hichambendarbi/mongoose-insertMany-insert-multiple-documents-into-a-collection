const mongoose = require("mongoose");

const LabSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "user"
  //   },
  identification: [
    {
      name: {
        type: String
      },
      code: {
        type: Number
      }
    }
  ],
  contact: [
    {
      tele: {
        type: [String]
      },
      adress: {
        type: String
      },
      city: {
        type: String
      },
      fax: {
        type: String
      }
    }
  ]
});

module.exports = Lab = mongoose.model("lab", LabSchema);

// name: {
//   type: String
// },

// tele: {
//   type: [String]
// },
// adress: {
//   type: String
// },
// city: {
//   type: String
// },
// fax: {
//   type: String
// }
