// components/ScrollButton/ScrollButton.jsx
import React from "react";
import styles from "./ScrollButton.module.css";

const ScrollButton = ({ contentRef }) => {
  const handleClick = () => {
    window.scrollTo({
      top: contentRef.current.offsetTop,
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
