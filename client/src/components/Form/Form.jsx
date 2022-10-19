import React, { useState } from "react";
import validate from "../../static/utils/functions/validation";
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
    homeAdress: "",
    moreDetails: ""
};

export default function Form() {

  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Seleccione un tipo de envio</label>
        <select>
          <option>Seleccione una opción</option>
          <option value="Particular">Envio Personal</option>
          <option value="Empresa">Envio para empresa</option>
        </select>
        <label>Ciudad de origen</label>
        <select>
          {ciudadOrigen.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
        <label>Ciudad de destino</label>
        <select>
          {ciudadDestino.map((d) => (
            <option value={d}>{d}</option>
          ))}
        </select>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label>Celular</label>
        <input
          type="number"
          name="cellphone"
          value={form.cellphone}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        {errors.cellphone && <p>{errors.cellphone}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label>Peso</label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        {errors.weight && <p>{errors.weight}</p>}
        <label>Altura</label>
        <input
          type="number"
          name="measure"
          value={form.measure}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        {errors.measure && <p>{errors.measure}</p>}
        <label>Dirección</label>
        <input
          type="text"
          name="homeAdress"
          value={form.homeAdress}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        {errors.homeAdress && <p>{errors.homeAdress}</p>}
        <label>Información adicional</label>
        <textarea
          name="moreDetails"
          value={form.moreDetails}
          rows="5"
          cols="30"
          onBLur={handleBlur}
          onChange={handleChange}
        ></textarea>
        {errors.moreDetails && <p>{errors.moreDetails}</p>}
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
}
