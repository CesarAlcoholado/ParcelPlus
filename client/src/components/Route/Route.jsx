import React from "react";
import styles from "./Route.module.css"

export default function Route() {
  return (
    <div className={styles.routeContainer}>
      <h1 className={styles.alcance}>Cobertura</h1>
      <p className={styles.p}>Hasta 200 km desde el punto de partida</p>
    </div>
  );
}
