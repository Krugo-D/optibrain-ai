import React from "react";
import styles from "./ToolCard.module.css";
import Link from "next/link";

const ToolCard = ({ tool }) => {
  const { name, logo, description, url } = tool;

  return (
    <div className={styles["tool-card"]}>
      <img src={logo} alt={`${name} logo`} className={styles["tool-logo"]} />
      <h3 className={styles["tool-name"]}>{name}</h3>
      <p className={styles["tool-description"]}>{description}</p>
      <Link href={url} passHref className={styles["tool-link"]}>
        Visit Website
      </Link>
    </div>
  );
};

export default ToolCard;
