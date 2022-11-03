import React from 'react'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import Logo from '../../static/assets/Logo.png'
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <img src={Logo} alt="ParcelPlusLogo" style={{"width": "50px", "height": "50px", "margin-right":"auto"}}/>
     <Navigation/> 
     <MobileNavigation/>
    </div>
  );
}
