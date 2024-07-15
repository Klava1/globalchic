import React from "react";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/eventsSlice";
import "./Filter.css";

const Filter = ({ category }) => {
  const selectedCategory = useSelector(getSelectedCategory);
  console.log(selectedCategory);

  return (
    <div>
      <p
        className={
          selectedCategory === category
            ? "categoryButtonSelected"
            : "categoryButton"
        }
      >
        {category}
      </p>
    </div>
  );
};

export default Filter;

// import { useSelector } from "react-redux";
// import { getSelectedCategory } from "../../redux/eventsSlice";
// import "./Filter.css";

// const Filter = ({ category }) => {
//   const selectedCategory = useSelector(getSelectedCategory);

//   return (
//     <div>
//       <p
//         className={
//           selectedCategory === category
//             ? "categoryButtonSelected"
//             : "categoryButton"
//         }
//       >
//         {category}
//       </p>
//     </div>
//   );
// };

// export default Filter;
