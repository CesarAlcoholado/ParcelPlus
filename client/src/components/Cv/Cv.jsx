import React, { useState } from "react";
import { useForm } from "../../static/utils/hooks/useForm";

export default function Form() {
  const { form, errors, handleChange, handleSubmit } = useForm(initialForm);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre y Apellido</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label>Edad</label>
        <input
          type="number"
          name="birth"
          value={form.birth}
          onChange={handleChange}
        />
        {errors.birth && <p>{errors.birth}</p>}
        <label>Provincia</label>
        <input
          type="text"
          name="region"
          value={form.region}
          onChange={handleChange}
        />
        {errors.region && <p>{errors.region}</p>}
        <label>Ciudad</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
        />
        {errors.city && <p>{errors.city}</p>}
        <label>Domicilio</label>
        <input
          type="text"
          name="homeAdress"
          value={form.homeAdress}
          onChange={handleChange}
        />
        {errors.homeAdress && <p>{errors.homeAdress}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label>Celular</label>
        <input
          type="number"
          name="cellphone"
          value={form.cellphone}
          onChange={handleChange}
        />
        {errors.cellphone && <p>{errors.cellphone}</p>}
        <label>Tipo de vehiculo utilitario</label>
        <select onChange={handleChange}>
          <option>Seleccione una opción</option>
          <option value="Si">Auto</option>
          <option value="No">Camioneta</option>
          <option value="No">Tráfic</option>
          <option value="No">Camion</option>
        </select>
        <label>Marca</label>
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
        />
        {errors.brand && <p>{errors.brand}</p>}
        <label>Modelo del vehiculo</label>
        <input
          type="number"
          name="model"
          value={form.model}
          onChange={handleChange}
        />
        {errors.model && <p>{errors.model}</p>}
        <label>Tenes licencia?</label>
        <select onChange={handleChange}>
          <option>Seleccione una opción</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
        <label>Poliza</label>
        <select onChange={handleChange}>
          <option>Esta al dia?</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
        <label>Es titular?</label>
        <select onChange={handleChange}>
          <option>Seleccione una opción</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
