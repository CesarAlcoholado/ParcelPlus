import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from './Hero.module.css';
import { IoMdArrowDropright } from 'react-icons/io';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} ${styles.trackingInContract}`}>DEJÁ TU PAQUETE EN NUESTRAS MANOS</h1>
      <Link to="#quotation" style={{"textDecoration": "none"}}>
        <button type="button" className={styles.heroButton}>
          Solicitá ya! <IoMdArrowDropright size="30px" />
        </button>
      </Link>
        <h2 className={styles.heroSubtitle}>NOSOTROS NOS ENCARGAMOS.</h2>
      </div>
    </section>
  );
}
