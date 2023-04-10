// components/Tool/Characteristics.jsx
import React from "react";
import styles from "./Tool.module.css";

const Characteristics = ({ tool }) => {
  const { categories, cost, codingSkillRequired, languages, url } = tool;

  return (
    <div className={`row mb-4 ${styles["characteristics"]}`}>
      <div className="col-12">
        <div className="d-flex flex-wrap">
          <div className="mr-2">
            <strong>Categories:</strong>{" "}
            {categories.map((category, index) => (
              <span key={index}>
                {category}
                {index < categories.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
          <div className="mr-2">
            <strong>Cost:</strong> {cost}
          </div>
          <div className="mr-2">
            <strong>Coding Skill Required:</strong> {codingSkillRequired}
          </div>
          <div className="mr-2">
            <strong>Languages:</strong>{" "}
            {languages.map((language, index) => (
              <span key={index}>
                {language}
                {index < languages.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
          <a href={url} className="btn btn-primary">
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
