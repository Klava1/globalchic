import React from "react";
import Filter from "./Filter";
import "./AllCategories.css";

const AllCategories = () => {
  const categories = ["Family", "Lecture", "Tour", "All"];

  return (
    <div className="container-all-filters">
      <h3>What kind of events are you looking for?</h3>
      <div className="all-filters">
        {categories.map((category) => (
          <Filter
            key={category}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
