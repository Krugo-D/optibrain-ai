import React from "react";
import styles from "./Filter.module.css";
import { useTranslation } from "next-i18next";

const Filter = ({ filters, setFilters }) => {
  const { t } = useTranslation("common");

  const categories = [
    t("all"),
    t("coding"),
    t("text_creation"),
    t("text_enhancement"),
    t("image_creation"),
    t("video_creation"),
    t("note_taking"),
    t("research"),
    t("automation"),
    t("autonomous"),
  ];
  const codingSkills = [t("all"), t("no"), t("yes")];
  const costs = [t("all"), t("free"), t("freemium"), t("paid")];

  const handleFilterChange = (event, filterType) => {
    setFilters({
      ...filters,
      [filterType]: event.target.value,
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
