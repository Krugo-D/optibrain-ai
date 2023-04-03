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
        <div key={title}>
          <h5 className={styles.filterTitle}>{title}</h5>
          <div className={styles.radioContainer}>
            {values.map((value) => (
              <label
                key={value}
                htmlFor={`${filterType}-${value}`}
                className={styles.radioLabel}>
                <input
                  type="radio"
                  name={filterType}
                  value={value}
                  id={`${filterType}-${value}`}
                  checked={filters[filterType] === value}
                  onChange={(e) => handleFilterChange(e, filterType)}
                  className={styles.radioInput}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
