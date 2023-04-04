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
          {" "}
          {/* Wrap the logo img tag with Link */}
          <img
            src="logo_transparent.png"
            alt="OptiBrain Logo"
            className={styles["logo-img"]}
          />
        </Link>
      </div>
      <Link href="/faq">
        {" "}
        {/* Wrap the FAQ anchor tag with Link */}
        <a className={styles.navLink}>FAQ</a>
      </Link>
      <Link href="/blog">
        {" "}
        {/* Wrap the Blog anchor tag with Link */}
        <a className={styles.navLink}>Blog</a>
      </Link>

      <div className={styles.controls}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
