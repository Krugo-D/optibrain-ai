// components/ScrollButton/ScrollButton.jsx
import React from "react";
import styles from "./ScrollButton.module.css";

const ScrollButton = ({ heroRef }) => {
  const handleClick = () => {
    const heroHeight = heroRef.current.offsetHeight;

    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className={styles.scrollButton} onClick={handleClick}>
        ↓
      </button>
    </>
  );
};

export default ScrollButton;
