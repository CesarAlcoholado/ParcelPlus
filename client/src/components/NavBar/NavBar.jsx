import React from 'react'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
     <Navigation/> 
     <MobileNavigation/>
    </div>
  );
}
