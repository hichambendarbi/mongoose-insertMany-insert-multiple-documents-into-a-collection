const mongoose = require("mongoose");

const LabSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "user"
  //   },
  identification: {
    name: {
      type: String
    },
    code: {
      type: Number
    }
  },
  contact: {
    teles: {
      fix: [
        {
          fix1: {
            type: String
          },
          fix2: {
            type: String
          }
        }
      ],
      mobile: [
        {
          mobile1: {
            type: String
          },
          mobile2: {
            type: String
          }
        }
      ],
      faxe: [
        {
          faxe1: {
            type: String
          },
          faxe2: {
            type: String
          }
        }
      ]
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
