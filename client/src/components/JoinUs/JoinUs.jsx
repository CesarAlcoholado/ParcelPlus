import React from "react";
import styles from "./JoinUs.module.css";

export default function JoinUs() {
  return (
    <div className={styles.joinUsContainer}>
      <h1 className={styles.joinTitle}>Sumate a nuestro equipo.</h1>
      <h3 className={styles.joinSubtitle}>Envianos tus datos y a la brevedad nos pondremos en contacto.</h3>
      <button className={styles.joinButton}>Postularme</button>
    </div>
  );
}
