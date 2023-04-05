// Header.jsx
import React from "react";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Link from "next/link"; // Import Link component from next/link

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["logo-nav-wrapper"]}>
        <Link href="/">
          <img
            src="logo_transparent.png"
            alt="OptiBrain Logo"
            className={styles["logo-img"]}
          />
        </Link>
      </div>
      <Link href="/faq" passHref>
        <div className={styles.navLink}>FAQ</div>
      </Link>
      <Link href="/blog" passHref>
        <div className={styles.navLink}>Blog</div>
      </Link>
      <Link href="#" passHref>
        <div className={styles.navLink}>Shop</div>
      </Link>

      <div className={styles.controls}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
