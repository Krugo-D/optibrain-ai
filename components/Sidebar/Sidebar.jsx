// components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const sections = [
    "AI Tool Overview",
    "Characteristics",
    "Expert Review",
    "AI Tool Ratings",
    "Pros & Cons",
    "Use Cases and Examples",
    "Tips and Tricks for Using the AI Tool",
  ];

  const handleClick = (index) => {
    setSelected(index);
    const target = document.getElementById(sections[index].replace(/ /g, "-"));
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        {sections.map((section, index) => (
          <li
            key={index}
            className={selected === index ? styles.active : ""}
            onClick={() => handleClick(index)}>
            {selected === index && <span>&#x25B6;</span>}
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
