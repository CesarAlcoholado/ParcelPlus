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
      from: { name: data.name, address: data.email },
      to: "parcelplus.pp@gmail.com",
      subject: "Consulta desde ParcelPlus.com.ar",
      html: `<h3>Datos</h3>
      <ul>
          <li>Remitente: ${data.name}</li>
          <li>Tipo de envio: ${data.shipment}</li>
          <li>Telofono: ${data.cellphone}</li>
          <li>Ciudad de origen: ${data.origenCity}</li>
          <li>Ciudad de destino: ${data.destineCity}</li>
          <li>Peso: ${data.weight}</li>
          <li>Medida: ${data.measure}</li>
          <li>Valor: ${data.value}</li>
          <li>Direccion de destino: ${data.homeAdress}</li>
          <li>Comentario: ${data.comment}</li>
      </ul>`,      
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
