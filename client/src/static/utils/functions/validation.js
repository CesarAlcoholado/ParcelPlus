
export default function validate(form){
  const regExp = /^[a-zA-Z\s]*$/g;
  const error = {}

  if (form.name.length < 2){
    error.name = "El nombre es demasiado corto"
  }else if(!regExp.test(form.name)){
    error.name = "Los caracteres ingresados no son válidos"
  }else if(!form.name){
    error.name = "Ingrese un nombre"
  }

}
