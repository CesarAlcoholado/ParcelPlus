import {
  regExpLett,
  regExpCell,
  regExpEmail,
  regExpDirection,
  regExpAge
} from "../../constants";


export default function cvValidate(form){
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Ingrese un nombre";
  } else if (!regExpLett.test(form.name)) {
    errors.name = "Ingrese solo letras";
  } else if (form.name.length < 3){
    errors.name = "El nombre es demasiado corto"
  } 

  if(!form.age){
    errors.age = "Ingrese edad"
  } else if (!regExpAge.test(form.age)){
    errors.age = "ingrese una edad válida"
  }

  if (!form.region.trim()) {
    errors.region = "Ingrese una provincia";
  } else if (!regExpLett.test(form.region)) {
    errors.region = "Ingrese solo letras";
  } else if (form.region.length < 3) {
    errors.region = "El nombre es demasiado corto";
  }

  if (!form.city.trim()) {
    errors.city = "Ingrese una ciudad";
  } else if (!regExpLett.test(form.city)) {
    errors.city = "Ingrese solo letras";
  } else if (form.city.length < 3) {
    errors.city = "El nombre es demasiado corto";
  }

  if (!form.homeAdress){
    errors.homeAdress = "Ingrese una direccion"
  }else if (!regExpDirection.test(form.homeAdress)) {
    errors.homeAdress = "La direccion ingresada no es válida";
  }

  if (!form.email) {
    errors.email = "Ingrese un email";
  } else if (!regExpEmail.test(form.email)) {
    errors.email = "El email ingresado no es valido";
  }

  if (!form.cellphone) {
    errors.cellphone = "Ingrese un numero de celular";
  } else if (!regExpCell.test(form.cellphone)) {
    errors.cellphone = "El número ingresado no es válido";
  }

  if (!form.car_type || form.car_type === "0") {
    errors.car_type = "Seleccioná un tipo de vehiculo";
  }

  if (!form.car_brand) {
    errors.car_brand = "Ingrese una marca";
  } else if (!regExpLett.test(form.car_brand)) {
    errors.car_brand = "Ingrese solo letras";
  } else if (!form.car_brand.trim()) {
    errors.car_brand = "Ingrese un nombre";
  }

  if (!form.car_model){
    errors.car_model = "Ingrese modelo del vehiculo";
  } else if (form.car_model < 2010){
    errors.car_model = "El modelo debe ser posterior a 2010"
  } 
  
  if (!form.license || form.license === "0") {
    errors.license = "Seleccioná una opción";
  }

  if (!form.policy || form.policy === "0") {
    errors.policy = "Seleccioná una opción";
  }

  if (!form.holder || form.holder === "0") {
    errors.holder = "Seleccioná una opción";
  }

  if (!form.certificate || form.certificate === "0") {
    errors.holder = "Seleccioná una opción";
  }
  
  return errors;
}