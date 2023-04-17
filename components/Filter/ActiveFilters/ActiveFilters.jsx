import React from "react";
import styles from "./ActiveFilters.module.css";

const ActiveFilters = ({ filters, handleRemoveFilter }) => {
  const filterNames = Object.keys(filters);

  return (
    <div className={styles.activeFiltersContainer}>
      {filterNames.map((filterName) => {
        const value = filters[filterName];
        if (value) {
          return (
            <div key={filterName} className={styles.activeFilter}>
              {value}
              <button onClick={() => handleRemoveFilter(filterName)}>
                &times;
              </button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ActiveFilters;
