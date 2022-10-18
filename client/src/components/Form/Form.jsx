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
        <label htmlFor="">Seleccione un tipo de envio</label>
        <select>
          <option>Seleccione una opción</option>
          <option value="Particular">Envio Personal</option>
          <option value="Empresa">Envio para empresa</option>
        </select>
        <label htmlFor="">Ciudad de origen</label>
        <select>
          {ciudadOrigen.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
        <label htmlFor="">Ciudad de destino</label>
        <select>
          {ciudadDestino.map((d) => (
            <option value={d}>{d}</option>
          ))}
        </select>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="">Celular</label>
        <input
          type="number"
          name="cellphone"
          value={form.cellphone}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="">Peso</label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="">Altura</label>
        <input
          type="number"
          name="measure"
          value={form.measure}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="">Dirección</label>
        <input
          type="text"
          name="homeAdress"
          value={form.homeAdress}
          onBLur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="">Información adicional</label>
        <textarea
          name="moreDetails"
          value={form.moreDetails}
          rows="5"
          cols="30"
          onBLur={handleBlur}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
}
