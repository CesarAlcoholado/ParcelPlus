const { matchedData } = require("express-validator");
const { mongoose } = require("mongoose");
const { cvsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const createItem = async (req, res) => {
  try {
    let body = matchedData(req);
    let data = await cvsModel.create(body);
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_FORM");
  }
};

module.exports = { createItem };
