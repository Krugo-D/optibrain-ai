import React from "react";
import styles from "./ToolCard.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ToolCard = ({ tool }) => {
  const { t } = useTranslation(["common", "descriptions"]);
  const { id, name, logo, url } = tool;

  return (
    <div className={styles["tool-card"]}>
      <img src={logo} alt={`${name} logo`} className={styles["tool-logo"]} />
      <h3 className={styles["tool-name"]}>{name}</h3>
      <p className={styles["tool-description"]}>{t(`descriptions:${id}`)}</p>
      <Link href={url} passHref>
        <div className={styles["tool-link"]}>{t("common:visit")}</div>
      </Link>
    </div>
  );
};

export default ToolCard;
