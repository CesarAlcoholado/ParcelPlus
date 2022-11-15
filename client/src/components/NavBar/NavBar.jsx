import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import Logo from '../../static/assets/Logo.png'
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <Link to="#home" style={{ "margin-right": "auto" }}>
        <img
          src={Logo}
          alt="ParcelPlusLogo"
          style={{ width: "50px", height: "50px"}}
        />
      </Link>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
