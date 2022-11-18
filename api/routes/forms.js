const express = require("express");
const router = express.Router();
const {
    validatorCreateItem,
    validatorGetItem,
  } = require("../validators/forms");
  const {
    createItem,
  } = require("../controllers/forms");

router.post("/", validatorCreateItem, createItem)

module.exports = router;