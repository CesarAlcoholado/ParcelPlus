import { useState } from 'react';
import validate from '../functions/validation';

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {}

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};

  validate(form)

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  }
};
