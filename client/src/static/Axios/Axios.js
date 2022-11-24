import axios from 'axios';

const apiForm = process.env.REACT_APP_API_FORM;
const apiCv = process.env.REACT_APP_API_CV;

export async function postForm (form) {
  try{
    const response = await axios
      ({
        url: `${apiForm}`,
        method: 'POST',
        data: form
      })
      return response.data
  }catch(error){
    console.log(error);
  }
}

export async function postCv (form) {
  try {
    const response = await axios
    ({
      url: `${apiCv}`,
      method: 'POST',
      data: form
    })
    return response.data
  } catch (error) {
    return(error);
  }
}