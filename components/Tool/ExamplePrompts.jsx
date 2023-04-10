// components/Tool/ExamplePrompts.jsx
import React from "react";
import styles from "./Tool.module.css";

const ExamplePrompts = () => {
  return (
    <div
      className={`row mb-4 ${styles["example-prompts"]}`}
      id="example-prompts">
      <div className="col-12">
        <h2>Example prompts</h2>
        <ul>
          <li>Example prompt 1</li>
          <li>Example prompt 2</li>
          <li>Example prompt 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ExamplePrompts;
