import React, { useState } from "react";
import validate from "../../static/utils/functions/validation";
import { ciudadOrigen, ciudadDestino } from "../../static/constants";

export default function Form() {
  const [data, setData] = useState({
    shipment: "",
    name: "",
    origenCity: "",
    destineCity: "",
    cellphone: null,
    email: "",
    weight: null,
    measure: null,
    homeAdress: "",
  });

  const onInputChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    validate(data);
  };

  return (
    <div>
      <form>
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
          value={data.name}
          onChange={onInputChange}
        />
        <label htmlFor="">Celular</label>
        <input
          type="number"
          name="cellphone"
          value={data.cellphone}
          onChange={onInputChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onInputChange}
        />
        <label htmlFor="">Peso</label>
        <input
          type="number"
          name="weight"
          value={data.weight}
          onChange={onInputChange}
        />
        <label htmlFor="">Altura</label>
        <input
          type="number"
          name="measure"
          value={data.measure}
          onChange={onInputChange}
        />
        <label htmlFor="">Dirección</label>
        <input
          type="text"
          name="homeAdress"
          value={data.homeAdress}
          onChange={onInputChange}
        />
        <label htmlFor="">Información adicional</label>
        <textarea name="moreDetails" rows="5" cols="30"></textarea>
      </form>
    </div>
  );
}
