import Filter from "./Filter";
import "./Filter.css";

const AllCategories = () => {
  const categories = ["LECTURE", "FAMILY", "TOUR", "ALL"];
  return (
    <div className="all-categories-container">
      <h1 className="all-categories-header">
        WHAT KIND OF AN EVENT ARE YOU LOOKING FOR?
      </h1>
      <div className="categories-list">
        {categories.map((category) => (
          <Filter
            key={category}
            eventCategory={category}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
