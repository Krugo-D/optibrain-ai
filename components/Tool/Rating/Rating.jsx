import React from "react";
import styles from "./Rating.module.css";

const Rating = ({ tool }) => {
  return (
    <div className={`${styles.ratingContainer} mb-4`}>
      <h2>Rating</h2>
      <div className={styles.rating}>
        <div className={styles.ratingValue}>4.5 / 5</div>
        <div className={styles.ratingDescription}>
          Based on 125 user reviews
        </div>
      </div>
    </div>
  );
};

export default Rating;
