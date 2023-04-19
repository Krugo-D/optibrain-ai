import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [showNavExternal, setShowNavExternal] = useState(false);

  const handleNavigation = (url) => {
    router.push(url);
    setShowNavExternal(false);
  };

  return (
    <>
      <MDBNavbar className={styles.header}>
        <div
          className={styles["logo-container"]}
          onClick={() => handleNavigation("/")}>
          <img
            src="/favicon.png"
            alt="toolpicker.ai icon"
            className={styles["favicon-img"]}
          />
          <img
            src="/branding/logo-name.png"
            alt="toolpicker.ai logo"
            className={styles["logo-img"]}
          />
        </div>
        <div className={styles["desktop-menu"]}>
          <MDBBtn
            className={styles["menu-btn"]}
            color="link"
            onClick={() => handleNavigation("/all-tools")}>
            {t("tools")}
          </MDBBtn>
          <MDBBtn
            className={styles["menu-btn"]}
            color="link"
            onClick={() => handleNavigation("/blog")}>
            {t("blog")}
          </MDBBtn>
          <MDBBtn
            className={styles["menu-btn"]}
            color="link"
            onClick={() => handleNavigation("/faq")}>
            {t("faq")}
          </MDBBtn>
          <MDBBtn className={styles["menu-btn"]} color="link">
            <LanguageSwitcher />
          </MDBBtn>
        </div>
        <MDBNavbarToggler
          className={styles["mobile-toggler"]}
          type="button"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavExternal(!showNavExternal)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="var(--primary)">
            <path d="M0 3h24v2H0zm0 7h24v2H0zm0 7h24v2H0z" />
          </svg>
        </MDBNavbarToggler>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className={styles.menu}>
          <MDBBtn
            block
            className={`${styles["menu-btn"]} border-bottom m-0`}
            color="link"
            onClick={() => handleNavigation("/all-tools")}>
            {t("tools")}
          </MDBBtn>
          <MDBBtn
            block
            className={`${styles["menu-btn"]} border-bottom m-0`}
            color="link"
            onClick={() => handleNavigation("/blog")}>
            {t("blog")}
          </MDBBtn>
          <MDBBtn
            block
            className={`${styles["menu-btn"]} border-bottom m-0`}
            color="link"
            onClick={() => handleNavigation("/faq")}>
            {t("faq")}
          </MDBBtn>
          <MDBBtn
            block
            className={`${styles["menu-btn"]} border-bottom m-0`}
            color="link">
            <LanguageSwitcher />
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
};

export default Header;
