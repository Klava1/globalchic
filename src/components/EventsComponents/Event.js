import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import "./EventsComponents.css";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Event = ({ event }) => {
  const [quantity, setQuantity] = useState(1);
  const { eventImage, eventDate, eventName, eventPrice } = event;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="event-card">
        <img
          src={eventImage}
          alt={eventName}
          className="event-image"
        />
        <button className="event-more-details">MORE DETAILS</button>
        <div className="event-details">
          <h3 className="event-date">{eventDate}</h3>
          <h2 className="event-name">{eventName}</h2>
          <h3 className="event-price">£ {eventPrice}</h3>
          <ChangeQuantity
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <button
            onClick={() => {
              dispatch(addItemToCart({ event, quantity }));
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
