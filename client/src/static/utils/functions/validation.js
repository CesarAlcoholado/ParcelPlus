import { regExpLett, regExpCell, regExpEmail, regExpDetails } from "../../constants";


export default function validate(form){

  const errors = {}

  if (form.name.length < 2){
    errors.name = "El nombre es demasiado corto"
  }else if(!regExpLett.test(form.name)){
    errors.name = "Ingrese solo letras"
  }else if(!form.name.trim()){
    errors.name = "Ingrese un nombre"
  }

  if (form.shipment === "0"){
    errors.shipment = "Seleccione una opción de envio"
  }

  if(form.cellphone === 0){
    errors.cellphone = "Ingrese un numero de celular"
  }else if(!regExpCell.test(form.cellphone)){
    errors.cellphone = "El número ingresado no es válido"
  }

  if(!form.email){
    errors.email = "Ingrese un email"
  }else if(!regExpEmail.test(form.email)){
    errors.email = "El email ingresado no es valido"
  }

  if (!regExpDetails.test(form.moreDetails)){
    errors.moreDetails = "Máximo 255 caracteres."
  } 
  
  if (form.weight > 700) {
    errors.weight = "Peso máximo 700 kg"
  }else if (form.weight < 0) {
    errors.weight = "El peso ingresado no es válido"
  }
  
  return errors;

}
