const mongoose = require("mongoose");

const FormScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    road: {
      type: ["user", "admin"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("forms", FormScheme);
