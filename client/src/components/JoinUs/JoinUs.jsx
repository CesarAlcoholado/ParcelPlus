import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./JoinUs.module.css";

export default function JoinUs() {

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
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.joinUsContainer}>
      <motion.div
      animate={ animation }>
        <h1 className={styles.joinTitle}>Sumate a nuestro equipo.</h1>
        <h3 className={styles.joinSubtitle}>Envianos tus datos y a la brevedad nos pondremos en contacto.</h3>
      </motion.div>
    </div>
  );
}
