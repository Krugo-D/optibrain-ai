import React from "react";
import styles from "./Filter.module.css";
import { useTranslation } from "next-i18next";

const Filter = ({ filters, setFilters }) => {
  const { t } = useTranslation("common");

  const categoryMapping = {
    [t("all")]: "",
    [t("coding")]: "Coding",
    [t("text_creation")]: "Text Creation",
    [t("text_enhancement")]: "Text Enhancement",
    [t("image_creation")]: "Image Creation",
    [t("video_creation")]: "Video Creation",
    [t("note_taking")]: "Note Taking",
    [t("research")]: "Research",
    [t("automation")]: "Automation",
    [t("autonomous")]: "Autonomous",
  };

  const codingSkillMapping = {
    [t("all")]: "",
    [t("no")]: "No",
    [t("yes")]: "Yes",
  };

  const costMapping = {
    [t("all")]: "",
    [t("free")]: "Free",
    [t("freemium")]: "Freemium",
    [t("paid")]: "Paid",
  };

  const reverseCategoryMapping = Object.fromEntries(
    Object.entries(categoryMapping).map(([key, value]) => [value, key])
  );

  const reverseCodingSkillMapping = {
    Yes: t("yes"),
    No: t("no"),
  };

  const reverseCostMapping = {
    Free: t("free"),
    Freemium: t("freemium"),
    Paid: t("paid"),
  };

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
    const value = event.target.value;
    const mappedValue =
      filterType === "category"
        ? categoryMapping[value]
        : filterType === "codingSkill"
        ? codingSkillMapping[value]
        : costMapping[value];
    setFilters({
      ...filters,
      [filterType]: mappedValue,
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
            value={
              filterType === "category"
                ? reverseCategoryMapping[filters[filterType]] || t("all")
                : filterType === "codingSkill"
                ? reverseCodingSkillMapping[filters[filterType]] || t("all")
                : reverseCostMapping[filters[filterType]] || t("all")
            }
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
