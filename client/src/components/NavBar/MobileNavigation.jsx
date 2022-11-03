import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import styles from "./NavBar.module.css";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const burguerIcon = (
    <IoMdMenu
      className={styles.burguer}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={styles.burguer}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => {
    setOpen(false)
  }

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : burguerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}
