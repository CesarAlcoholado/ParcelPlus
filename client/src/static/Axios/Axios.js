import axios from 'axios';

const apiForm = process.env.REACT_API_FORM;
const apiCv = process.env.REACT_API_CV;

export function postForm (form) {
  return async function(){
  try {
    let postForm = await axios.post(`${apiForm}`, form )
    console.log(postForm);
    return postForm;
  } catch (error){
    console.error(error.message)
  }}
}

export function postCv (form) {
  return async function(){
  try {
    let postCv = await axios.post(`${apiCv}`, form);
    console.log(postCv);
    return postCv;
  } catch (error) {
    console.error(error.message);
  }}
};