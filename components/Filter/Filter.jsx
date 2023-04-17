import React, { useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import styles from "./Filter.module.css";
import { useTranslation } from "next-i18next";

const Filter = ({ filters, setFilters }) => {
  const { t } = useTranslation("common");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const languages = ["English", "Vietnamese"];

  const handleFilterChange = (value, filterType) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  return (
    <div className={styles.filterContainer}>
      <Navbar className="navbar-dark">
        <ul className="navbar-nav">
          {[
            {
              title: t("categories"),
              values: categories,
              filterType: "category",
            },
            {
              title: t("coding"),
              values: codingSkills,
              filterType: "codingSkill",
            },
            {
              title: t("cost"),
              values: costs,
              filterType: "cost",
            },
            {
              title: t("languages"),
              values: languages,
              filterType: "language",
            },
          ].map(({ title, values, filterType }) => (
            <li key={title} className="nav-item">
              <NavDropdown title={title} id="basic-nav-dropdown">
                {values.map((value) => (
                  <NavDropdown.Item
                    key={value}
                    onClick={() => handleFilterChange(value, filterType)}>
                    {value === ""
                      ? t("all")
                      : t(value.toLowerCase().split(" ").join("_"))}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </li>
          ))}
        </ul>
      </Navbar>
    </div>
  );
};

export default Filter;
