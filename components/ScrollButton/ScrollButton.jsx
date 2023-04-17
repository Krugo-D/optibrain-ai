// components/ScrollButton/ScrollButton.jsx
import React from "react";
import styles from "./ScrollButton.module.css";
import { ArrowDownCircle } from "react-bootstrap-icons";

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
        <ArrowDownCircle />
      </button>
    </>
  );
};

export default ScrollButton;
