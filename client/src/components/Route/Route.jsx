import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Route.module.css"

export default function Route() {

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
    <div ref={ref} className={styles.routeContainer}>
      <motion.div animate={animation} style={{"overflow": "hidden"}}>
        <h1 className={styles.alcance}>Cobertura</h1>
        <p className={styles.p}>Hasta 200 km desde el punto de partida</p>
      </motion.div>
    </div>
  );
}
