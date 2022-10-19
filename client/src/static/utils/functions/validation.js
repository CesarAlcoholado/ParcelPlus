
export default function validate(form){
  const regExpLett = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regExpCell = /^(\d{3})\s?(\d{3})\s?(\d{6})$/;
  const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

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

  if(!form.cellphone){
    errors.cellphone = "Ingrese un numero de celular"
  }else if(!regExpCell.test(form.cellphone)){
    errors.cellphone = "El numero ingresado no es válido"
  }

  if(!form.email){
    errors.email = "Ingrese un email"
  }else if(!regExpEmail.test(form.email)){
    errors.email = "El email ingresado no es valido"
  }
  return errors

}
