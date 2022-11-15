import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./contact.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.slider}>
      Contactanos!
      <div className={styles.slide_track}>
        <div className={styles.slide}>
          Alejandro
          <a href="https://api.whatsapp.com/send?phone=2995124657" rel="noreferrer" target="_blank">
          <AiOutlineWhatsApp size="14px" className={styles.number} />
            299 5937729
          </a>       </div>
        <div className={styles.slide}>
          Graciela
          <a href="https://api.whatsapp.com/send?phone=2995124657" rel="noreferrer" target="_blank">
          <AiOutlineWhatsApp size="14px" className={styles.number} />
            299 5937729
          </a>       </div>
        <div className={styles.slide}>
          Yoni
          <a href="https://api.whatsapp.com/send?phone=2995124657" rel="noreferrer" target="_blank">
          <AiOutlineWhatsApp size="14px" className={styles.number} />
            299 5124657
          </a>       </div>

        <div className={styles.slide}>
          Alejandro
          <a href="https://api.whatsapp.com/send?phone=2995124657" rel="noreferrer" target="_blank">
          <AiOutlineWhatsApp size="14px" className={styles.number} />
            299 5937729
          </a>       </div>
        <div className={styles.slide}>
            Graciela
            <a href="https://api.whatsapp.com/send?phone=2995124657" rel="noreferrer" target="_blank">
            <AiOutlineWhatsApp size="14px" className={styles.number} />
              299 5937729
            </a>        </div>
        <div className={styles.slide}>
          Yoni
          <a href="https://api.whatsapp.com/send?phone=2995124657" rel="noreferrer" target="_blank">
          <AiOutlineWhatsApp size="14px" className={styles.number} />
            299 5124657
          </a>       </div>
      </div>
    </div>
  );
}
