import React from "react";
import { useForm } from "../../static/utils/hooks/useForm";
import { cvType } from "../../static/constants";
import styles from "./Cv.module.css";
import toast, { Toaster } from "react-hot-toast";

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
  certificate: ""
};

const notify = () => toast.success("Formulario enviado con éxito!");

export default function Cv({ open, onClose }) {
  const { form, errors, handleChange, handleSubmit, handleBlur, handleCvSubmit } = useForm(
    initialCv,
    cvType,
    notify
  );

  if (!open) return null;
  
  function todos() {
    onClose();
    notify();
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form} noValidate onSubmit={handleCvSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.userData}>
              <h1 className={styles.dataTitle}>Tus datos</h1>
              <label className={styles.labels}>Nombre y Apellido*</label>
              <input
                className={styles.inputField}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
              <label className={styles.labels}>
                Edad* (debés ser mayor a 18 años)
              </label>
              <input
                className={styles.inputField}
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.age && <p className={styles.error}>{errors.age}</p>}
              <label className={styles.labels}>Provincia*</label>
              <input
                className={styles.inputField}
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.region && <p className={styles.error}>{errors.region}</p>}
              <label className={styles.labels}>Ciudad*</label>
              <input
                className={styles.inputField}
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && <p className={styles.error}>{errors.city}</p>}
              <label className={styles.labels}>Domicilio*</label>
              <input
                className={styles.inputField}
                type="text"
                name="homeAdress"
                value={form.homeAdress}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.homeAdress && (
                <p className={styles.error}>{errors.homeAdress}</p>
              )}
              <label className={styles.labels}>Email*</label>
              <input
                className={styles.inputField}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
              <label className={styles.labels}>Celular*</label>
              <input
                className={styles.inputField}
                type="number"
                name="cellphone"
                value={form.cellphone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cellphone && (
                <p className={styles.error}>{errors.cellphone}</p>
              )}
            </div>
            <div className={styles.vehicleData}>
              <h1 className={styles.dataTitle}>Datos del vehiculo</h1>
              <label className={styles.labels}>
                Tipo de vehiculo utilitario*
              </label>
              <select
                className={styles.inputField}
                name="car_type"
                value={form.car_type}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">Seleccioná una opción</option>
                <option value="Auto">Auto</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Trafic">Tráfic</option>
                <option value="Camion">Camión</option>
              </select>
              {errors.car_type && (
                <p className={styles.error}>{errors.car_type}</p>
              )}
              <label className={styles.labels}>Marca*</label>
              <input
                className={styles.inputField}
                type="text"
                name="car_brand"
                value={form.car_brand}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.car_brand && (
                <p className={styles.error}>{errors.car_brand}</p>
              )}
              <label className={styles.labels}>Modelo del vehiculo*</label>
              <input
                className={styles.inputField}
                type="number"
                name="car_model"
                value={form.car_model}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.car_model && (
                <p className={styles.error}>{errors.car_model}</p>
              )}
              <label className={styles.labels}>Tenés licencia?*</label>
              <select
                className={styles.inputField}
                name="license"
                value={form.license}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">Seleccioná una opción</option>
                <option value="Si">Sí</option>
                <option value="No">No</option>
              </select>
              {errors.license && (
                <p className={styles.error}>{errors.license}</p>
              )}
              <label className={styles.labels}>Tu póliza está al dia?*</label>
              <select
                className={styles.inputField}
                name="policy"
                value={form.policy}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">Seleccioná una opción</option>
                <option value="Si">Sí</option>
                <option value="No">No</option>
              </select>
              {errors.policy && <p className={styles.error}>{errors.policy}</p>}
              <label className={styles.labels}>Sos titular?*</label>
              <select
                className={styles.inputField}
                name="holder"
                value={form.holder}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">Seleccione una opción</option>
                <option value="Si">Sí</option>
                <option value="No">No</option>
              </select>
              {errors.holder && <p className={styles.error}>{errors.holder}</p>}
              <label className={styles.labels}>Tenés certificado de antecedentes penales?*</label>
              <select
                className={styles.inputField}
                name="certificate"
                value={form.certificate}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">Seleccioná una opción</option>
                <option value="Si">Sí</option>
                <option value="No">No</option>
              </select>
              {errors.certificate && <p className={styles.error}>{errors.certificate}</p>}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              // onClick={todos}
              className={styles.submitButton}
              disabled={
                !form.name ||
                !form.age ||
                !form.region ||
                !form.city ||
                !form.homeAdress ||
                !form.email ||
                !form.cellphone ||
                !form.certificate
              }
            >
              ENVIAR
            </button>
            <button type="button" onClick={onClose} className={styles.close}>
              CERRAR
            </button>
          </div>
        </form>
      </div>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
        position="bottom-center"
      />
    </div>
  );
}
