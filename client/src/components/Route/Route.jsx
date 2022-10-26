import React from "react";
import styles from "./Route.module.css"

export default function Route() {
  return (
    <div className={styles.routeContainer}>
      <h1 className={styles.alcance}>Alcance</h1>
      <h3 className={styles.h3}>Hasta 200 km desde el punto de partida</h3>
    </div>
  );
}
