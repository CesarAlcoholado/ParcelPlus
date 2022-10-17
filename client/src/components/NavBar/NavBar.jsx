import React from 'react'
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div>
      <div className={styles.LogoContainer}></div>
      <div className={styles.ListContainer}>
        <ul className={styles.ul}>
          <li className={styles.ListItem}>Inicio</li>
          <li className={styles.ListItem}>Servicios</li>
          <li className={styles.ListItem}>Presupuesto</li>
          <li className={styles.ListItem}>Contacto</li>
        </ul>
      </div>
    </div>
  );
}
