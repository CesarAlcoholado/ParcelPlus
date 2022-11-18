const { matchedData } = require("express-validator");
const { mongoose } = require("mongoose");
const { formsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { transporter } = require("../config/email");

const createItem = async (req, res) => {
  try {
    let body = matchedData(req);
    let data = await formsModel.create(body);

    await transporter.sendMail({
      from: `${data.name} ${data.email}`,
      to: "parcelplus.pp@gmail.com",
      subject: "Consulta desde ParcelPlus.com.ar",
      html: `<h2>Datos</h2>
      <h3>${data.email}</h3>
          <li>Remitente: ${data.name}</li>
          <li>Tipo de envio: ${data.shipment}</li>
          <li>Telofono: ${data.cellphone}</li>
          <li>Ciudad de origen: ${data.origenCity}</li>
          <li>Ciudad de destino: ${data.destineCity}</li>
          <li>Peso: ${data.weight}</li>
          <li>Medida: ${data.measure}</li>
          <li>Valor: ${data.value}</li>
          <li>Direccion de destino: ${data.homeAdress}</li>
          <li>Comentario: ${data.comment}</li>`,
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
