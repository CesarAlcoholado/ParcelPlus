
export default function validate(form){
  const regExp = /^[a-zA-Z\s]*$/g;
  const errors = {}

  if (form.name.length < 2){
    errors.name = "El nombre es demasiado corto"
  }else if(!regExp.test(form.name)){
    errors.name = "Ingrese solo letras"
  }else if(!form.name.trim()){
    errors.name = "Ingrese un nombre"
  }

  return errors

}
