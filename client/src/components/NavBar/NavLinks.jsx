import React from "react";
import styles from "./NavBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function NavLinks(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className={styles.ul}>
      <Link to="#home">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          className={styles.ListItem}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Inicio
        </motion.li>
      </Link>
      <Link to="#quotation">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.10 }}
          className={styles.ListItem}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Presupuesto
        </motion.li>
      </Link>
      <Link to="#contact">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.20 }}
          className={styles.ListItem}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Contacto
        </motion.li>
      </Link>
      <Link to="#about">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.30 }}
          className={styles.ListItem}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Nosotros
        </motion.li>
      </Link>
    </ul>
  );
}
