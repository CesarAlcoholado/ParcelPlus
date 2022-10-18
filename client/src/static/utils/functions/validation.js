
export default function validate(data){
  const regExp = /^[a-zA-Z\s]*$/g;
  const error = {}

  if (data.name.length < 2){
    error.name = "El nombre es demasiado corto"
  }else if(!regExp.test(data.name)){
    error.name = "Los caracteres ingresados no son válidos"
  }else if(!data.name){
    error.name = "Ingrese un nombre"
  }

}
