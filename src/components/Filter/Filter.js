import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/eventsSlice";
import "./Filter.css";

const Filter = ({ eventCategory }) => {
  const selectedCategory = useSelector(getSelectedCategory);
  const dispatch = useDispatch();

  return (
    <div>
      <p
        onClick={() => {
          dispatch(filterCategory(eventCategory));
        }}
        className={
          selectedCategory === eventCategory
            ? "categoryButtonSelected"
            : "categoryButton"
        }
      >
        {eventCategory}
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
