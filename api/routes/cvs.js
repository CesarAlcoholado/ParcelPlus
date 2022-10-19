const express = require("express");
const router = express.Router();
const {
    validatorCreateItem,
    validatorGetItem,
  } = require("../validators/cvs");
  const {
    createItem,
  } = require("../controllers/cvs");

router.post("/", validatorCreateItem, createItem)

module.exports = router;