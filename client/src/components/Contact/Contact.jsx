import React from "react";
import styles from "./contact.module.css";

export default function Footer() {
  return (
    <div className={styles.slider}>
      Contáctanos
      <div className={styles.slide_track}>
        <div className={styles.slide}>
          Graciela
          <a href="https://api.whatsapp.com/send?phone=2995124657">
            299 5937729
          </a>
        </div>
        <div className={styles.slide}>
          Yoni
          <a href="https://api.whatsapp.com/send?phone=2995124657">
            299 5124657
          </a>
        </div>
        <div className={styles.slide}>
          Alejandro
          <a href="https://api.whatsapp.com/send?phone=2995124657">
            299 5937729
          </a>
        </div>

        <div className={styles.slide}>
          Graciela
          <a href="https://api.whatsapp.com/send?phone=2995124657">
            299 5937729
          </a>
        </div>
        <div className={styles.slide}>
          Yoni
          <a href="https://api.whatsapp.com/send?phone=2995124657">
            299 5124657
          </a>
        </div>
        <div className={styles.slide}>
          Alejandro
          <a href="https://api.whatsapp.com/send?phone=2995124657">
            299 5937729
          </a>
        </div>
      </div>
    </div>
  );
}
