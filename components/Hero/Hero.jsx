// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import ScrollButton from "../ScrollButton/ScrollButton";
import { useTranslation } from "next-i18next";

const Hero = ({ heroRef }) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.jumbotron} ref={heroRef}>
      {/*logo*/}
      <div className={styles["logo-container"]}>
        <Image
          src="/logo_transparent.png"
          alt="OptiBrain Logo"
          layout="fill" // Fill the logo container
          objectFit="cover" // Cover the logo container
        />
      </div>
      <h1 className={styles.h1}>{t("subtitle")}</h1>
      <p className={styles.p}>{t("description")}</p>
      <ScrollButton heroRef={heroRef} />
    </div>
  );
};

export default Hero;
