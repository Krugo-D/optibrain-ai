import React from "react";
import styles from "./ProCon.module.css";

const ProCon = ({ tool }) => {
  return (
    <div className={`${styles.proConContainer} mb-4`}>
      <h2>Pros & Cons</h2>
      <div className={styles.proCon}>
        <div className={styles.pros}>
          <h3>Pros</h3>
          <ul>
            <li>
              <span
                className={styles.positiveEmoji}
                role="img"
                aria-label="positive">
                🟢
              </span>{" "}
              Easy to use
            </li>
            <li>
              <span
                className={styles.positiveEmoji}
                role="img"
                aria-label="positive">
                🟢
              </span>{" "}
              Wide range of features
            </li>
          </ul>
        </div>
        <div className={styles.cons}>
          <h3>Cons</h3>
          <ul>
            <li>
              <span
                className={styles.negativeEmoji}
                role="img"
                aria-label="negative">
                🔴
              </span>{" "}
              Expensive pricing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProCon;
