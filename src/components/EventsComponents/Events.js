import "./Events.css";
import { getSelectedCategory } from "../../redux/eventsSlice";
import { useSelector } from "react-redux";
import Event from "./Event";
import { data } from "../../data";

function Events({ events = data }) {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="events-container">
      {data
        .filter((event) => {
          if (selectedCategory === "all") {
            return true;
          }
          return selectedCategory === event.category;
        })
        .map((event) => (
          <Event
            key={event.id}
            event={event}
          />
        ))}
    </div>
  );
}

export default Events;
