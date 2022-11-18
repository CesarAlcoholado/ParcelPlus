import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import van from "../../static/assets/ParcelPlusVan.png";
import styles from "./Vehicles.module.css";

export default function Vehicles() {
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
    <>
      <div className={styles.OurfloatContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Nuestra Flota</h1>
          <p className={styles.description}>
            Contamos con unidades modernas y en excelentes condiciones
          </p>
        </div>
        <img
          className={styles.vehiclesImage}
          src={van}
          alt="orange-background"
          loading="lazy"
        />
      </div>
      <div ref={ref} className={styles.guarantee}>
        <motion.div animate={animation}>
          <h1 className={styles.guaranteeTitle}>
            Garantizamos el
            <span className={styles.percentage}> 97% </span>
            de entregas directas al dia
          </h1>
        </motion.div>
      </div>
    </>
  );
}
