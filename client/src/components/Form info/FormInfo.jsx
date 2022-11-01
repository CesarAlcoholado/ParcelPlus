import React from "react";
import styles from "./FormInfo.module.css";
import easy from "../../static/assets/easy.png";
import fast from "../../static/assets/delivery.png";
import trust from "../../static/assets/validation.png";
import secure from "../../static/assets/box.png";

export default function FormInfo() {
  return (
    <div className={styles.infoContainer}>
      <div>
      <h1 className={styles.title}>Solicitá tu envio ahora</h1>
      <p className={styles.contact}>
        Completá estos datos y nos pondremos en contacto.
      </p>
      </div>
      <div className={styles.formCardsContainer}>
        <div className={styles.formCard}>
          <img className={styles.icon} src={easy} alt="easy icon" />
          <h2 className={styles.subtitle}>Fácil</h2>
        </div>
        <div className={styles.formCard}>
          <img className={styles.icon} src={fast} alt="fast icon" />
          <h2 className={styles.subtitle}>Rápido</h2>
        </div>
        <div className={styles.formCard}>
          <img className={styles.icon} src={trust} alt="reliable icon" />
          <h2 className={styles.subtitle}>Confiable</h2>
        </div>
        <div className={styles.formCard}>
          <img className={styles.icon} src={secure} alt="secure icon" />
          <h2 className={styles.subtitle}>Seguro</h2>
        </div>
      </div>
        <h3 className={styles.h3}>nosotros te asesoramos.</h3>
    </div>
  );
}
