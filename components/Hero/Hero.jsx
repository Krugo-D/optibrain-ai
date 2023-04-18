import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Hero = ({ contentRef }) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.jumbotron}>
      <div className={styles["text-container"]}>
        <p className={styles.p}>{t("description")}</p>
        <Link href="/all-tools">
          <button className={`btn btn-primary ${styles["cta-button"]}`}>
            Explore All Tools
          </button>
        </Link>
      </div>
      <div className={styles["logo-container"]}>
        <Image
          src="/branding/logo-full.webp"
          alt="toolpicker.ai logo"
          width={800} // Set a width for the logo
          height={400} // Set a height for the logo
          objectFit="contain" // Contain the logo within the logo container
        />
      </div>
    </div>
  );
};

export default Hero;
