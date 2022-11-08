import React, { useState } from 'react'
import Cv from '../Cv/Cv.jsx';
import styles from './Modal.module.css'

export default function Modal () {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.modal}>
      <button className={styles.joinButton} onClick={() => setOpenModal(true)}>Postularme</button>
      <Cv open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
