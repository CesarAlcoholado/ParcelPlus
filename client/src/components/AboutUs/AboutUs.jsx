import React from "react";
import styles from "./AboutUs.module.css";
import vision from "../../static/assets/vision.png";
import mision from "../../static/assets/mision.png";
import values from "../../static/assets/values.png";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutTitle}>Por qué elegirnos</h1>
      <p className={styles.aboutSubtitle}>
        Somos una empresa con años de <b>experiencia</b> y estamos en constante
        crecimiento.<br></br>Contamos con personal experimentado y una moderna{" "}
        <b>variedad</b> de vehiculos.<br></br>Nuestros clientes son nuestra{" "}
        <b>prioridad</b>.{" "}
      </p>
      <div className={styles.aboutCardsContainer}>
        <div className={styles.aboutCard}>
          <div className={styles.headline}>
            <h2 className={styles.cardTitle}>Visión</h2>
            <img src={vision} alt="vision logo" style={{ width: "100px" }} />
          </div>
          <p className={styles.description}>
            Nuestra visión es ofrecer un servicio dinámico. Óptimo y escencial
            aportando no solo un servicio convencional, sino tambien avances y
            soluciones para el crecimiento de nuestros clientes
          </p>
        </div>
        <div className={styles.aboutCard}>
          <div className={styles.headline}>
            <h2 className={styles.cardTitle}>Misión</h2>
            <img src={mision} alt="mision logo" style={{ width: "100px" }} />
          </div>
          <p className={styles.description}>
            Brindar un servicio aplicando nuestro conocimiento, predisposicion y
            experiencia para que quien confie en nosotros sienta que es
            especial, que su necesidad es nuestra prioridad y que su
            satisfaccion es nuestra recompensa.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <div className={styles.headline}>
            <h2 className={styles.cardTitle}>Valores</h2>
            <img src={values} alt="values logo" style={{ width: "100px" }} />
          </div>
          <div className={styles.description}>
            <ul className={styles.valuesList}>
              <li className={styles.valueItem}>Honestidad</li>
              <li className={styles.valueItem}>Compromiso</li>
              <li className={styles.valueItem}>Cumplimiento</li>
              <li className={styles.valueItem}>Integridad</li>
              <li className={styles.valueItem}>Comunicación</li>
              <li className={styles.valueItem}>Innovación</li>
              <li className={styles.valueItem}>Trabajo en equipo</li>
              <li className={styles.valueItem}>Responsabilidad</li>
              {/* <li className={styles.valueItem}>Predisposición</li>
              <li className={styles.valueItem}>Cumplimiento</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}