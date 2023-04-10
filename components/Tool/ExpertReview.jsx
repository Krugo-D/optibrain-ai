// components/Tool/ExpertReview.jsx
import React from "react";
import styles from "./Tool.module.css";

const ExpertReview = () => {
  return (
    <div className={`row mb-4 ${styles["expert-review"]}`} id="expert-review">
      <div className="col-12">
        <h2>Expert Review</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          imperdiet velit vitae lacinia tempus. Vivamus convallis sagittis
          bibendum. In hac habitasse platea dictumst.
        </p>
        <p>
          Nunc facilisis lorem lacus, vel gravida libero pharetra vel.
          Suspendisse sit amet mi eget purus auctor vestibulum a eget odio.
          Etiam volutpat tincidunt est, a fermentum ante sagittis at.
        </p>
      </div>
    </div>
  );
};

export default ExpertReview;
