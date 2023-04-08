import React from "react";
import styles from "./Filter.module.css";
import { useTranslation } from "next-i18next";

const Filter = ({ filters, setFilters }) => {
  const { t } = useTranslation("common");

  const categories = [
    "",
    "Coding",
    "Text Creation",
    "Text Enhancement",
    "Image Creation",
    "Video Creation",
    "Note Taking",
    "Research",
    "Automation",
    "Autonomous",
  ];
  const codingSkills = ["", "No", "Yes"];
  const costs = ["", "Free", "Freemium", "Paid"];

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  return (
    <div className={styles.filterContainer}>
      {[
        { title: t("categories"), values: categories, filterType: "category" },
        {
          title: t("coding_skill_required"),
          values: codingSkills,
          filterType: "codingSkill",
        },
        { title: t("cost"), values: costs, filterType: "cost" },
      ].map(({ title, values, filterType }) => (
        <div key={title} className={styles.dropdownContainer}>
          <h5 className={styles.filterTitle}>{title}</h5>
          <select
            value={filters[filterType]}
            onChange={(e) => handleFilterChange(e, filterType)}
            className={styles.dropdown}>
            {values.map((value) => (
              <option key={value} value={value}>
                {value === ""
                  ? t("all")
                  : t(value.toLowerCase().split(" ").join("_"))}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filter;
