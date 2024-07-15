import React, { useState } from "react";
import "./Events.css";
import { data } from "../../data.js";

function Events({ events = data }) {
  const [showMoreEvents, setShowMoreEvents] = useState(4);

  const handleShowMoreEvents = () => {
    setShowMoreEvents(showMoreEvents + 4);
  };

  return (
    <section>
      <h2 className="section-title">Events</h2>
      <div className="events-grid">
        {events.slice(0, showMoreEvents).map((element) => {
          const { id, eventImage, eventDate, eventName, eventPrice } = element;
          return (
            <div
              key={id}
              className="event-card"
            >
              <img
                src={eventImage}
                alt="event"
                className="future-event-image"
              />
              <div className="event-details">
                <h3 className="event-date">{eventDate}</h3>
                <h2 className="event-name">{eventName}</h2>
                <h3 className="event-price">{eventPrice}</h3>
                <button>How many people are coming?</button>
                <button className="event-add-to-cart">
                  Add tickets to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showMoreEvents < events.length && (
        <button
          className="show-more-events"
          onClick={handleShowMoreEvents}
        >
          Show more events
        </button>
      )}
    </section>
  );
}

export default Events;
