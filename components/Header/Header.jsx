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
          <div className={styles["logo-wrapper"]}>
            <img
              src="/favicon.png"
              alt="toolpicker.ai icon"
              className={styles["favicon-img"]}
            />
            <img
              src="/branding/logo-name.webp"
              alt="toolpicker.ai logo"
              className={styles["logo-img"]}
            />
          </div>
        </Link>
      </div>
      <Link href="/faq" passHref>
        <div className={styles.navLink}>{t("faq")}</div>
      </Link>
      <Link href="/blog" passHref>
        <div className={styles.navLink}>{t("blog")}</div>
      </Link>
      <div className={styles.controls}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
