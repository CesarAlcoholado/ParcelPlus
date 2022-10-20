import {
  regExpLett,
  regExpCell,
  regExpEmail,
  regExpDetails,
  regExpNumbers,
  regExpDirection,
} from "../../constants";

export default function validate(form) {
  const errors = {};

  if (form.name.length < 2) {
    errors.name = "El nombre es demasiado corto";
  } else if (!regExpLett.test(form.name)) {
    errors.name = "Ingrese solo letras";
  } else if (!form.name.trim()) {
    errors.name = "Ingrese un nombre";
  }

  if (form.shipment === "0") {
    errors.shipment = "Seleccione una opción de envio";
  }

  if (form.cellphone === 0) {
    errors.cellphone = "Ingrese un numero de celular";
  } else if (!regExpCell.test(form.cellphone)) {
    errors.cellphone = "El número ingresado no es válido";
  }

  if (!form.email) {
    errors.email = "Ingrese un email";
  } else if (!regExpEmail.test(form.email)) {
    errors.email = "El email ingresado no es valido";
  }

  if (form.moreDetails) {
    if (!regExpDetails.test(form.moreDetails)) {
      errors.moreDetails = "Máximo 255 caracteres.";
    }
  }

  if (parseFloat(form.weight) > 700) {
    errors.weight = "Peso máximo 700 kg";
  } else if (form.weight < 0) {
    errors.weight = "Ingrese un peso válido";
  } else if (!regExpNumbers.test(form.weight)) {
    errors.weight = "El campo contiene caracteres invalidos";
  }

  if (parseFloat(form.measure) > 200) {
    errors.measure = "Altura máxima 2 mts";
  } else if (form.measure < 0) {
    errors.measure = "Ingrese una altura válida";
  } else if (!regExpNumbers.test(form.measure)) {
    errors.measure = "El campo contiene caracteres invalidos";
  }

  if (form.value < 0) {
    errors.value = "Ingrese un valor";
  } else if (!regExpNumbers.test(form.value)) {
    errors.value = "El campo contiene caracteres invalidos";
  }

  if (!form.homeAdress){
    errors.homeAdress = "Ingrese una direccion"
  }else if (!regExpDirection.test(form.homeAdress)) {
    errors.homeAdress = "La direccion ingresada no es válida";
  }

  return errors;
}
