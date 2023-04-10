// components/Tool/Tips.jsx
import React from "react";
import styles from "./Tool.module.css";

const Tips = ({ tool }) => {
  const { name } = tool;

  return (
    <div className={`row mb-4 ${styles["tips"]}`} id="tips">
      <div className="col-12">
        <h2>Tips for using {name}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sollicitudin varius tempor. Ut dignissim velit vitae ullamcorper
          tristique. Aenean et iaculis justo.
        </p>
      </div>
    </div>
  );
};

export default Tips;
