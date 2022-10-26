import React from "react";
import van from "../../static/assets/parked-van.jpg";
import styles from "./Vehicles.module.css"

export default function Vehicles() {
  return (
    <div className={styles.OurfloatContainer}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Nuestra Flota</h1>
        <p className={styles.description}>
          Contamos con 11 unidades modernas y en excelentes condiciones
        </p>
      </div>
      <img
        className={styles.vehiclesImage}
        src={van}
        alt="orange-background"
      />
    </div>
  );
}
