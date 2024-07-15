import React from "react";
import Filter from "./Filter";

const AllCategories = () => {
  const categories = ["Family", "Lecture", "Tour", "All"];

  return (
    <div>
      <h3>What kind of events are you looking for?</h3>
      {categories.map((category) => (
        <Filter
          key={category}
          category={category}
        />
      ))}
    </div>
  );
};

export default AllCategories;
