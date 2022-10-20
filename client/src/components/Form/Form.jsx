import React from "react";
import { ciudadOrigen, ciudadDestino } from "../../static/constants";
import { useForm } from "../../static/utils/hooks/useForm";

const initialForm = {
  shipment: "",
  name: "",
  origenCity: "",
  destineCity: "",
  cellphone: null,
  email: "",
  weight: null,
  measure: null,
  value: null,
  homeAdress: "",
  moreDetails: "",
};

const type = "packageForm"

export default function Form() {

  const {
    form,
    errors,
    handleChange,
    handleSubmit
  } = useForm(initialForm, type);

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <label>Seleccione un tipo de envio*</label>
        <select name="shipment" value={form.shipment} onChange={handleChange}>
          <option value="0">Seleccione una opción</option>
          <option value="Particular">Envio Personal</option>
          <option value="Empresa">Envio para empresa</option>
        </select>
        {errors.shipment && <p>{errors.shipment}</p>}
        <label>Ciudad de origen*</label>
        <select
          name="origenCity"
          value={form.origenCity}
          onChange={handleChange}
        >
          {ciudadOrigen.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
        <label>Ciudad de destino*</label>
        <select
          name="destineCity"
          value={form.destineCity}
          onChange={handleChange}
        >
          {ciudadDestino.map((d) => (
            <option value={d}>{d}</option>
          ))}
        </select>
        <label>Nombre*</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label>Celular* (incluir código de área)</label>
        <input
          type="number"
          name="cellphone"
          value={form.cellphone}
          onChange={handleChange}
        />
        {errors.cellphone && <p>{errors.cellphone}</p>}
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label>Peso aproximado (en kg.)</label>
        <input
          type="number"
          inputMode="decimal"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
        {
          //Agregar parseFloat a peso, altura y valor.
        }
        {errors.weight && <p>{errors.weight}</p>}
        <label>Altura aproximada (en cm.)</label>
        <input
          type="number"
          inputMode="decimal"
          name="measure"
          value={form.measure}
          onChange={handleChange}
        />
        {errors.measure && <p>{errors.measure}</p>}
        <label>Valor aproximado (en AR$)</label>
        <input
          type="number"
          inputMode="decimal"
          name="value"
          value={form.value}
          onChange={handleChange}
        />
        {errors.value && <p>{errors.value}</p>}
        <label>Dirección*</label>
        <input
          type="text"
          name="homeAdress"
          value={form.homeAdress}
          onChange={handleChange}
        />
        {errors.homeAdress && <p>{errors.homeAdress}</p>}
        <label>Información adicional</label>
        <textarea
          name="moreDetails"
          value={form.moreDetails}
          rows="5"
          cols="30"
          onChange={handleChange}
        ></textarea>
        {errors.moreDetails && <p>{errors.moreDetails}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
