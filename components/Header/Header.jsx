// Header.jsx
import React from "react";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["logo-nav-wrapper"]}>
        <img
          src="logo_transparent.png"
          alt="OptiBrain Logo"
          className={styles["logo-img"]}
        />
      </div>
      <nav className={styles.navigation}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          About
        </a>
        <a href="#" className={styles.navLink}>
          Contact
        </a>
      </nav>
      <div className={styles.controls}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
