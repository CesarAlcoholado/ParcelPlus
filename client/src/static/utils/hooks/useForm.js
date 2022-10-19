import { useState } from 'react';
import validate from '../functions/validation';

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form))
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit
  }
};
