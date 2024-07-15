import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/eventsSlice";
import "./Filter.css";

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  console.log(selectedCategory);

  return (
    <div>
      <p
        onClick={() => {
          dispatch(filterCategory(category));
        }}
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
