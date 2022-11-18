import React, { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiStore2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { RiDoorClosedLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { RiTimerFlashLine } from "react-icons/ri";
///////////////////////////////////////////////////////////
import eCommerce from "../../static/assets/ecommercePc.png";
import truck from "../../static/assets/moving.png";
import envelope from "../../static/assets/envelope.png";
import doorToDoor from "../../static/assets/door-to-door.png";
import handShake from "../../static/assets/handshake.png";
import stopwatch from "../../static/assets/flash-sale.png";


import styles from "./ServicesSection.module.css";

export default function ServicesSection() {

  const { ref, inView } = useInView({
    threshold: 0.5
  })

  const animation = useAnimation();

  useEffect(() => {
    if (inView){
      animation.start ({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    }
    if (!inView) {
      animation.start ({
        x: '+100vw'
      })
    }
  }, [inView])
  

  return (
    <div ref={ref} id="services" className={styles.titleContainer}>
      <h1 className={styles.ourServices}>Nuestros Servicios</h1>
      <motion.div
        className={styles.cardsContainer}
        animate={animation}
      >
        <div className={styles.container}>
          <ServiceCard
            title={"Logistica de E-Commerce"}
            icon={<RiStore2Line size="40px" />}
            image={eCommerce}
          />
          <ServiceCard
            title={"Despacho y traslado"}
            icon={<TbTruckDelivery size="90px" />}
            image={truck}
          />
          <ServiceCard
            title={"Mensajeria"}
            icon={<FiBox size="40px" />}
            image={envelope}
          />
        </div>
        <div className={styles.container}>
          <ServiceCard
            title={"Paqueteria puerta a puerta"}
            icon={<RiDoorClosedLine size="40px" />}
            image={doorToDoor}
          />
          <ServiceCard
            title={"Pre-pactados"}
            icon={<FaRegHandshake size="40px" />}
            image={handShake}
          />
          <ServiceCard
            title={"Expresos"}
            icon={<RiTimerFlashLine size="40px" />}
            image={stopwatch}
          />
        </div>
      </motion.div>
    </div>
  );
}
