import React from "react";
import styles from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineWhatsApp} from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h4>Compañia</h4>
            <ul>
              <li>
                <a href="#">Acerda de </a>
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
            <h4>Contáctenos</h4>
            <ul>
              <li>
                <a>Graciela</a>
                <a href="https://api.whatsapp.com/send?phone=2995937729">
                  <BsFillTelephoneFill size="12px" />
                  <AiOutlineWhatsApp size="14.5px" />
                  299 5937729
                </a>
              </li>
              <li>
                <a>Yoni</a>
                <a href="https://api.whatsapp.com/send?phone=2995124657">
                  <BsFillTelephoneFill size="12px" />
                  <AiOutlineWhatsApp size="14.5px" />
                  299 5124657
                </a>
              </li>
              <li>
                <a>Alejandro</a>
                <a href="https://api.whatsapp.com/send?phone=2994127567">
                  <BsFillTelephoneFill size="12px" />
                  <AiOutlineWhatsApp size="14.5px" />
                  299 4127567
                </a>
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
