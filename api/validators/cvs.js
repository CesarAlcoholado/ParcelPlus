const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("age").exists().notEmpty().isNumeric(),
  check("region").exists().notEmpty(),
  check("city").exists().notEmpty(),
  check("homeAdress").exists().notEmpty(),
  check("email").notEmpty().isEmail(),
  check("cellphone").exists().notEmpty().isNumeric(),
  check("car_type").exists().notEmpty(),
  check("car_brand").exists().notEmpty(),
  check("car_model").exists().notEmpty().isNumeric(),
  check("license").exists().notEmpty(),
  check("policy").exists().notEmpty(),
  check("holder").exists().notEmpty(),
  check("certificate").exists().notEmpty(),
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