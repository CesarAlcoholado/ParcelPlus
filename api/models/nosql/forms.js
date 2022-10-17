const mongoose = require("mongoose");

const FormScheme = new mongoose.Schema(
  {
    shipment: {
      type: ["particular", "empresa"],
    },
    name: {
      type: String,
    },
    cellphone: {
      type: Number,
    },
    origenCity: {
      type: ["Cipolletti", "Neuquen"],
    },
    email: {
      type: String,
      unique: true,
    },
    destineCity: {
      type: ["Cipolletti", "Neuquen"],
    },
    moreDetails: {
      type: String,
    },
    weight: {
      type: Number,
    },
    measure: {
      type: Number,
    },
    value: {
      type: Number,
    },
    homeAdress: {
      type: String,
    }
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("forms", FormScheme);
