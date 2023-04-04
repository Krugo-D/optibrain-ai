import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filters, setFilters }) => {
  const categories = [
    "All",
    "Coding",
    "Text Creation",
    "Text Enhancement",
    "Image Creation",
    "Video Creation",
    "Note Taking",
    "Research",
    "Automation",
  ];
  const codingSkills = ["All", "No", "Yes"];
  const costs = ["All", "Free", "Freemium", "Paid"];

  const handleFilterChange = (event, filterType) => {
    setFilters({
      ...filters,
      [filterType]: event.target.value,
    });
  };

  return (
    <div className={styles.filterContainer}>
      {[
        { title: "Category", values: categories, filterType: "category" },
        {
          title: "Coding Skill Required",
          values: codingSkills,
          filterType: "codingSkill",
        },
        { title: "Cost", values: costs, filterType: "cost" },
      ].map(({ title, values, filterType }) => (
        <div key={title} className={styles.dropdownContainer}>
          <h5 className={styles.filterTitle}>{title}</h5>
          <select
            value={filters[filterType]}
            onChange={(e) => handleFilterChange(e, filterType)}
            className={styles.dropdown}>
            {values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filter;
