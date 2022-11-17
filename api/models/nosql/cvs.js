const mongoose = require("mongoose");

const CvScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    region: {
      type: String,
    },
    city: {
      type: String,
    },
    homeAdress: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    cellphone: {
      type: Number,
    },
    car_type: {
      type: ["Auto", "Camioneta", "Trafic", "Camion"],
    },
    car_brand: {
      type: String,
    },
    car_model: {
      type: Number,
    },
    license: {
      type: ["Si", "No"],
    },
    policy: {
      type: ["Si", "No"],
    },
    holder: {
      type: ["Si", "No"],
    },
    certificate: {
      type: ["Si", "No"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("cvs", CvScheme);
