import { useState } from 'react';
import validate from '../functions/validation';
import cvValidation from '../functions/cvValidation';
import { postForm, postCv } from '../../Axios/Axios';

export const useForm = (initialForm, type, notify) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e)=>{
    handleChange(e);
    if (type === "packageForm") {
      setErrors(validate(form));
    } else if (type === "cvForm") {
      setErrors(cvValidation(form));
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form));
    if(Object.keys(errors).length === 0) {
      postForm(form)
      notify()
    } else {
      return
    }
  }

  const handleCvSubmit = (e) => {
    e.preventDefault();
    setErrors(cvValidation(form));
    if (Object.keys(errors).length === 0) {
      postCv(form);
      notify();
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleFormSubmit,
    handleCvSubmit
  }
};
