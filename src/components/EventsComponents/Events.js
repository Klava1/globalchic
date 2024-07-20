import { useSelector } from "react-redux";
import dataEvents from "../../dataEvents";
import Event from "./Event";
import { getSelectedCategory } from "../../redux/eventsSlice";
import "./EventsComponents.css";

const Events = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="events-grid">
      {dataEvents
        .filter((event) => {
          if (selectedCategory === "ALL") return true;
          return selectedCategory === event.eventCategory;
        })
        .map((event, id) => (
          <Event
            key={id}
            event={event}
          />
        ))}
    </div>
  );
};

export default Events;
