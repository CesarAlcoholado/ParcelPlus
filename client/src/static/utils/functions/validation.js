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

  if (!form.name.trim()) {
    errors.name = "Ingresá un nombre";
  } else if (form.name.length < 2) {
    errors.name = "El nombre es demasiado corto";
  } else if (!regExpLett.test(form.name)) {
    errors.name = "Ingresá solo letras";
  } 
  
  if (!form.shipment || form.shipment === "0") {
    errors.shipment = "Seleccioná una opción de envio";
  }

  if (!form.origenCity || form.origenCity === "0") {
    errors.origenCity = "Seleccioná una ciudad de origen";
  }

  if (!form.destineCity || form.destineCity === "0") {
    errors.destineCity = "Seleccioná una ciudad de destino";
  }

  if (!form.cellphone) {
    errors.cellphone = "Ingresá un numero de celular";
  } else if (!regExpCell.test(form.cellphone)) {
    errors.cellphone = "El número ingresado no es válido";
  }

  if (!form.email) {
    errors.email = "Ingresá un email";
  } else if (!regExpEmail.test(form.email)) {
    errors.email = "El email ingresado no es valido";
  }
  
  if (!form.size){
    errors.size = "Ingresá información de la carga"
  }else if (!regExpDetails.test(form.size)){
    errors.size = "Máximo 255 caracteres"
  }
  
  if (!form.homeAdress){
    errors.homeAdress = "Ingresá una direccion"
  }else if (!regExpDirection.test(form.homeAdress)) {
    errors.homeAdress = "La direccion ingresada no es válida";
  }
  
  if (form.moreDetails) {
    if (!regExpDetails.test(form.moreDetails)) {
      errors.moreDetails = "Máximo 255 caracteres.";
    }
  }

  return errors;
}
