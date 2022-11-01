import React from "react";
import styles from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h4>Compañia</h4>
            <ul>
              <li>
                <a href="#">Acerca de </a>
              </li>
              <li>
                <a href="#">Nuestros servicios</a>
              </li>
              <li>
                <a href="#">Politicas de privacidad</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Ayuda</h4>
            <ul>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Follow us</h4>
            <ul>
              <li>
                <a href="#">
                  <BsFacebook size="20px" />
                </a>
              </li>
              <li>
                <a href="#">
                  <GrInstagram size="20px" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn size="20px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
