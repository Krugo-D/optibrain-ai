// components/Tool/Tool.jsx
import React from "react";
import styles from "./Tool.module.css";

const Tool = ({ tool }) => {
  const {
    name,
    logo,
    description,
    url,
    codingSkillRequired,
    cost,
    categories,
    languages,
  } = tool;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={logo}
            alt={`${name} logo`}
            className={styles["tool-logo"]}
          />
        </div>
        <div className="col-md-6">
          <h1>{name}</h1>
          <p>{description}</p>
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
      <div className="row mt-5">
        <div className="col-12">
          <h2>Tips for using {name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sollicitudin varius tempor. Ut dignissim velit vitae ullamcorper
            tristique. Aenean et iaculis justo.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2>Example prompts</h2>
          <ul>
            <li>Example prompt 1</li>
            <li>Example prompt 2</li>
            <li>Example prompt 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tool;
