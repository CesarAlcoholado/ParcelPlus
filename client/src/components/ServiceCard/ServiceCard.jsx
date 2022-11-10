import React from 'react'
import styles from "./ServiceCard.module.css";

export default function ServiceCard({title, icon, image}) {

  
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={image} alt="icon" height={"70px"} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
