import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import ScrollButton from "../ScrollButton/ScrollButton";
import { useTranslation } from "next-i18next";

const Hero = ({ contentRef }) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.jumbotron}>
      <div className={styles["text-container"]}>
        <h1 className={styles.h1}>{t("subtitle")}</h1>
        <p className={styles.p}>{t("description")}</p>
      </div>
      <div className={styles["logo-container"]}>
        <Image
          src="/branding/logo-full.webp"
          alt="toolpicker.ai logo"
          layout="fill" // Fill the logo container
          objectFit="contain" // Contain the logo within the logo container
        />
      </div>
      <ScrollButton contentRef={contentRef} />
    </div>
  );
};

export default Hero;
