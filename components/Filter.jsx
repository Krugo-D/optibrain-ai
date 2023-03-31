// components/Filter.jsx
import React from "react";

const Filter = ({ filters, setFilters }) => {
  const categories = [
    "Webdesign",
    "Music",
    "Generative Art",
    "Video Editing",
    "Data Analysis",
  ];
  const codingSkills = ["No", "Yes"];
  const costs = ["Free", "Freemium", "Paid"];
  const languages = ["Vietnamese", "English"];

  const handleFilterChange = (event, filterType) => {
    setFilters({
      ...filters,
      [filterType]: event.target.value,
    });
  };

  return (
    <div className="filter">
      <h5>Category</h5>
      {categories.map((category) => (
        <div key={category}>
          <input
            type="radio"
            name="category"
            value={category}
            id={`category-${category}`}
            checked={filters.category === category}
            onChange={(e) => handleFilterChange(e, "category")}
          />
          <label htmlFor={`category-${category}`}>{category}</label>
        </div>
      ))}
      <h5>Coding Skill Required</h5>
      {codingSkills.map((skill) => (
        <div key={skill}>
          <input
            type="radio"
            name="codingSkill"
            value={skill}
            id={`codingSkill-${skill}`}
            checked={filters.codingSkill === skill}
            onChange={(e) => handleFilterChange(e, "codingSkill")}
          />
          <label htmlFor={`codingSkill-${skill}`}>{skill}</label>
        </div>
      ))}
      <h5>Cost</h5>
      {costs.map((cost) => (
        <div key={cost}>
          <input
            type="radio"
            name="cost"
            value={cost}
            id={`cost-${cost}`}
            checked={filters.cost === cost}
            onChange={(e) => handleFilterChange(e, "cost")}
          />
          <label htmlFor={`cost-${cost}`}>{cost}</label>
        </div>
      ))}
      <h5>Language</h5>
      {languages.map((language) => (
        <div key={language}>
          <input
            type="radio"
            name="language"
            value={language}
            id={`language-${language}`}
            checked={filters.language === language}
            onChange={(e) => handleFilterChange(e, "language")}
          />
          <label htmlFor={`language-${language}`}>{language}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
