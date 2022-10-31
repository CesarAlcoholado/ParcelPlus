import React from "react";
import { useForm } from "../../static/utils/hooks/useForm";
import { cvType } from "../../static/constants";
import styles from "./Cv.module.css";

const initialCv = {
  name: "",
  age: null,
  region: "",
  city: "",
  homeAdress: "",
  email: "",
  cellphone: null,
  car_type: "",
  car_brand: "",
  car_model: null,
  license: "",
  policy: "",
  holder: "",
};

const Cv = ({ open, onClose }) => {
  const { form, errors, handleChange, handleSubmit } = useForm(
    initialCv,
    cvType
  );

  if (!open) return null;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form noValidate onSubmit={handleSubmit}>
          <label>Nombre y Apellido*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
          <label>Edad* (debes ser mayor a 18 años)</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
          <label>Provincia*</label>
          <input
            type="text"
            name="region"
            value={form.region}
            onChange={handleChange}
          />
          {errors.region && <p>{errors.region}</p>}
          <label>Ciudad*</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
          <label>Domicilio*</label>
          <input
            type="text"
            name="homeAdress"
            value={form.homeAdress}
            onChange={handleChange}
          />
          {errors.homeAdress && <p>{errors.homeAdress}</p>}
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <label>Celular*</label>
          <input
            type="number"
            name="cellphone"
            value={form.cellphone}
            onChange={handleChange}
          />
          {errors.cellphone && <p>{errors.cellphone}</p>}
          <label>Tipo de vehiculo utilitario*</label>
          <select name="car_type" value={form.car_type} onChange={handleChange}>
            <option value="0">Seleccione una opción</option>
            <option value="Auto">Auto</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Trafic">Tráfic</option>
            <option value="Camion">Camión</option>
          </select>
          {errors.car_type && <p>{errors.car_type}</p>}
          <label>Marca*</label>
          <input
            type="text"
            name="car_brand"
            value={form.car_brand}
            onChange={handleChange}
          />
          {errors.car_brand && <p>{errors.car_brand}</p>}
          <label>Modelo del vehiculo*</label>
          <input
            type="number"
            name="car_model"
            value={form.car_model}
            onChange={handleChange}
          />
          {errors.car_model && <p>{errors.car_model}</p>}
          <label>Posee licencia?*</label>
          <select name="license" value={form.license} onChange={handleChange}>
            <option value="0">Seleccione una opción</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
          {errors.license && <p>{errors.license}</p>}
          <label>Su póliza está al dia?*</label>
          <select name="policy" value={form.policy} onChange={handleChange}>
            <option value="0">Seleccione una opción</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
          {errors.policy && <p>{errors.policy}</p>}
          <label>Es titular?*</label>
          <select name="holder" value={form.holder} onChange={handleChange}>
            <option value="0">Seleccione una opción</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
          {errors.holder && <p>{errors.holder}</p>}
          <input
            type="submit"
            value="Enviar"
            disabled={
              Object.keys(errors).length ||
              errors.name ||
              errors.age ||
              errors.region ||
              errors.city ||
              errors.homeAdress ||
              errors.email ||
              errors.cellphone ||
              errors.car_type ||
              errors.car_brand ||
              errors.car_model ||
              errors.license ||
              errors.policy ||
              errors.holder
            }
          />
        </form>
        <button onClick={onClose} className={styles.open}>
          ENVIAR
        </button>
        <button onClick={onClose} className={styles.close}>
          CERRAR
        </button>
      </div>
    </div>
  );
};

export default Cv;
