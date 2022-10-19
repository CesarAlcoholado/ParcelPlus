const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("shipment").exists().notEmpty(),
  check("name").exists().notEmpty(),
  check("cellphone").exists().notEmpty(),
  check("origenCity").exists().notEmpty(),
  check("email").notEmpty().isEmail(),
  check("destineCity").exists().notEmpty(),
  check("weight").exists().notEmpty().isNumeric(),
  check("measure").exists().notEmpty().isNumeric(),
  check("value").exists().notEmpty().isNumeric(),
  check("comment"),
  check("homeAdress").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = {validatorCreateItem, validatorGetItem}