import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./AboutUs.module.css";
import vision from "../../static/assets/vision.png";
import mision from "../../static/assets/mision.png";
import values from "../../static/assets/values.png";
import Modal from "../Modal/Modal";

export default function AboutUs() {

    const { ref, inView } = useInView({
      threshold: 0.5,
    });

    const animation = useAnimation();

    useEffect(() => {
      if (inView) {
        animation.start({
          x: 0,
          transition: {
            type: "spring",
            duration: 1,
            bounce: 0.3,
          },
        });
      }
      if (!inView) {
        animation.start({
          x: "+100vw",
        });
      }
    }, [inView]);

  return (
    <section id="about" className={styles.aboutSection}>
      <h1 className={styles.aboutTitle}>Por qué elegirnos</h1>
      <p className={styles.aboutSubtitle}>
        Somos una empresa con años de <b>experiencia</b> y estamos en constante
        crecimiento.<br></br>Contamos con personal experimentado y una moderna{" "}
        <b>variedad</b> de vehiculos.<br></br>Nuestros clientes son nuestra{" "}
        <b>prioridad</b>.{" "}
      </p>
      <div ref={ref} className={styles.aboutCardsContainer}>
        <motion.div className={styles.aboutCard} animate={ animation }>
          <div className={styles.headline}>
            <h2 className={styles.cardTitle}>Visión</h2>
            <img className={styles.icon} src={vision} alt="vision logo" />
          </div>
          <p className={styles.description}>
            Nuestra visión es ofrecer un servicio dinámico. Óptimo y escencial
            aportando no solo un servicio convencional, sino tambien avances y
            soluciones para el crecimiento de nuestros clientes
          </p>
        </motion.div>
        <motion.div className={styles.aboutCard} animate={ animation }>
          <div className={styles.headline}>
            <h2 className={styles.cardTitle}>Misión</h2>
            <img className={styles.icon} src={mision} alt="mision logo" />
          </div>
          <p className={styles.description}>
            Brindar un servicio aplicando nuestro conocimiento, predisposicion y
            experiencia para que quien confie en nosotros sienta que es
            especial, que su necesidad es nuestra prioridad y que su
            satisfaccion es nuestra recompensa.
          </p>
        </motion.div>
        <motion.div className={styles.aboutCard} animate={ animation }>
          <div className={styles.headline}>
            <h2 className={styles.cardTitle}>Valores</h2>
            <img className={styles.icon} src={values} alt="values logo" />
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
            </ul>
          </div>
        </motion.div>
      </div>
      <h1 className={`${styles.workTitle} ${styles.left}`}>
        Trabajá con nosotros.
      </h1>
      <h2 className={`${styles.workSubtitle} ${styles.left}`}>
        Vos también podes formar parte de Parcel Plus.
        <br />
        Si te interesa ser parte de nuestro equipo, completá este formulario
      </h2>
      <Modal />
    </section>
  );
}
