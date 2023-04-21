// components/Sidebar/Sidebar.jsx
import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./Sidebar.module.css";

const headingIds = {
  Introduction: "introduction",
  Review: "review",
  Rating: "rating",
  Tips: "tips",
  Pros: "pros",
  Cons: "cons",
  Cost: "cost",
  Alternatives: "alternatives",
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Sidebar = () => {
  return (
    <ListGroup className={styles.sticky}>
      <ListGroup.Item active className="bg-primary text-white">
        Contents
      </ListGroup.Item>
      {Object.keys(headingIds).map((heading) => (
        <ListGroup.Item
          key={headingIds[heading]}
          action
          onClick={() => scrollToSection(headingIds[heading])}>
          {heading}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
