import React, { useState } from 'react'
import Cv from '../Cv/Cv.jsx';

export default function Modal () {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Formá parte de nuestro equipo</h1>
      <button onClick={() => setOpenModal(true)}>ABRIR</button>
      <Cv open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
