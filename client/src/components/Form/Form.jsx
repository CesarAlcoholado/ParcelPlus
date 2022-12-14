import React from "react";
import { ciudadOrigen, ciudadDestino } from "../../static/constants";
import { useForm } from "../../static/utils/hooks/useForm";
import { packageType } from "../../static/constants";
import FormInfo from "../Form info/FormInfo";
import styles from "./Form.module.css";
import toast, { Toaster } from "react-hot-toast";

const initialForm = {
  shipment: "",
  name: "",
  origenCity: "",
  destineCity: "",
  cellphone: null,
  email: "",
  size: "",
  homeAdress: "",
  moreDetails: "",
};

const notify = () => toast.success("Formulario enviado con éxito!");

export default function Form() {
  const { form, errors, handleChange, handleSubmit, handleBlur, handleFormSubmit } = useForm(
    initialForm,
    packageType,
    notify
  );

  return (
    <div id="quotation" className={styles.formContainer}>
      <FormInfo />
      <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
        <div className={`${styles.packageInfo} ${styles.flexContainer}`}>
          <h1 className={styles.formTitle}>Datos de envio</h1>
          <label className={styles.labels}>Seleccioná un tipo de envio*</label>
          <select
            className={styles.inputField}
            name="shipment"
            value={form.shipment}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="0">Seleccioná una opción</option>
            <option value="Particular">Envio Personal</option>
            <option value="Empresa">Envio para empresa</option>
          </select>
          {errors.shipment && <p className={styles.error}>{errors.shipment}</p>}
          <label className={styles.labels}>Ciudad de origen*</label>
          <select
            className={styles.inputField}
            name="origenCity"
            value={form.origenCity}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="0">Seleccioná una opción</option>
            {ciudadOrigen.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
          {errors.origenCity && (
            <p className={styles.error}>{errors.origenCity}</p>
          )}
          <label className={styles.labels}>Ciudad de destino*</label>
          <select
            className={styles.inputField}
            name="destineCity"
            value={form.destineCity}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="0">Seleccioná una opción</option>
            {ciudadDestino.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
          {errors.destineCity && (
            <p className={styles.error}>{errors.destineCity}</p>
          )}
          <label className={styles.labels} id="size">
            Descripción de la carga* (peso, medidas, valor aprox.)
          </label>
          <textarea
            className={styles.load}
            name="size"
            value={form.size}
            rows="5"
            cols="30"
            placeholder="Dejá una descripción acá."
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.size && <p className={styles.error}>{errors.size}</p>}
          <label className={styles.labels} id="details">
            Consulta/Información adicional
          </label>
          <textarea
            className={styles.description}
            name="moreDetails"
            value={form.moreDetails}
            rows="5"
            cols="30"
            placeholder="Hacé tu consulta o agregá mas información acá."
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.moreDetails && (
            <p className={styles.error}>{errors.moreDetails}</p>
          )}
        </div>
        <div className={`${styles.userInfo} ${styles.flexContainer}`}>
          <h1 className={styles.formTitle}>Tus datos</h1>
          <label className={styles.labels}>Nombre*</label>
          <input
            className={styles.inputField}
            type="text"
            name="name"
            placeholder="Juan Perez"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
          <label className={styles.labels}>Email*</label>
          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Ejemplo@gmail.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
          <label className={styles.labels}>Dirección*</label>
          <input
            className={styles.inputField}
            type="text"
            name="homeAdress"
            placeholder="Dirección 123"
            value={form.homeAdress}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.homeAdress && (
            <p className={styles.error}>{errors.homeAdress}</p>
          )}
          <label className={styles.labels}>
            Celular* (incluir código de área)
          </label>
          <input
            className={`${styles.inputField} ${styles.cellphoneInput}`}
            type="number"
            name="cellphone"
            placeholder="299 154******"
            value={form.cellphone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.cellphone && (
            <p className={styles.error}>{errors.cellphone}</p>
          )}
          <input
            className={styles.submitButton}
            type="submit"
            value="Solicitar presupuesto"
            disabled={
              !form.name || !form.email || !form.homeAdress || !form.cellphone
            }
          />
        </div>
      </form>
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
