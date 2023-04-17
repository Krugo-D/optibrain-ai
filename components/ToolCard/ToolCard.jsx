// components/ToolCard/ToolCard.jsx
import React from "react";
import styles from "./ToolCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ToolCard = ({ tool }) => {
  const { t } = useTranslation(["common", "descriptions"]);
  const { id, name, logo, url } = tool;
  const router = useRouter();
  const { locale } = router;

  return (
    <div className={styles["tool-card"]}>
      <div className={styles["logo-container"]}>
        <img src={logo} alt={`${name} logo`} className={styles["tool-logo"]} />
      </div>
      <h3 className={styles["tool-name"]}>{name}</h3>
      <p className={styles["tool-description"]}>{t(`descriptions:${id}`)}</p>
      <Link href={url} passHref>
        <div className={styles["tool-link"]}>{t("common:visit")}</div>
      </Link>
      <Link href={`/${locale}/tools/${id}`} passHref>
        <div className={styles["tool-more-info"]}>{t("common:moreInfo")}</div>
      </Link>
    </div>
  );
};

export default ToolCard;
