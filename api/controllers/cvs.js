const { matchedData } = require("express-validator");
const { cvsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { transporter } = require("../config/email");

const createItem = async (req, res) => {
  try {
    let body = matchedData(req);
    let data = await cvsModel.create(body);

    await transporter.sendMail({
      from: `${data.name} ${data.email}`,
      to: "parcelplus.pp@gmail.com",
      subject: "Curriculum",
      html: `<h2>Datos</h2>
      <h3>${data.email}</h3>
          <li>Nombre: ${data.name}</li>
          <li>Edad: ${data.age}</li>
          <li>Provincia: ${data.region}</li>
          <li>Ciudad: ${data.city}</li>
          <li>Direccion: ${data.homeAdress}</li>
          <li>Email: ${data.email}</li>
          <li>Celular: ${data.cellphone}</li>
          <li>Tipo de vehiculo: ${data.car_type}</li>,
          <li>Marca de vehiculo: ${data.car_brand}</li>,
          <li>Modelo de vehiculo: ${data.car_model}</li>,
          <li>Tiene licensia al dia?: ${data.license}</li>,
          <li>Tiene poliza al dia?: ${data.policy}</li>,
          <li>Es titular del vehiculo?: ${data.holder}</li>
          <li>Certificado de antecedentes penales: ${data.certificate}</li>`
    });
    try {
      res.send({ data });
    } catch (error) {
      handleHttpError(res, "ERROR_CREATE_FORM");
    }
  } catch (error) {
    handleHttpError(res, "ERROR_SEND_FORM");
  }
};

module.exports = { createItem };
