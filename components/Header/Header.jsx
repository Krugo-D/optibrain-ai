// Header.jsx
import React from "react";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation("common");

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
        <div className={styles.navLink}>{t("faq")}</div>
      </Link>
      <Link href="/blog" passHref>
        <div className={styles.navLink}>{t("blog")}</div>
      </Link>
      <Link href="#" passHref>
        <div className={styles.navLink}>{t("shop")}</div>
      </Link>

      <div className={styles.controls}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
