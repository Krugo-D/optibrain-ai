// components/Tool/Overview.jsx
import React from "react";
import styles from "./Tool.module.css";

const Overview = ({ tool }) => {
  const { name, logo, description } = tool;

  return (
    <div className="row mb-4" id="overview">
      <div className={`col-md-6 ${styles["logo-description"]}`}>
        <img src={logo} alt={`${name} logo`} className={styles["tool-logo"]} />
      </div>
      <div className={`col-md-6 ${styles["logo-description"]}`}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Overview;
