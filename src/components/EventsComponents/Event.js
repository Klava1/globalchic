import "./Event.css";

const Event = ({ event }) => {
  const { eventImage, eventDate, eventName, eventPrice } = event;

  return (
    <div className="event-card">
      <img
        src={eventImage}
        alt="event"
        className="future-event-image"
      />
      <div className="event-details">
        <h3 className="event-date">{eventDate}</h3>
        <h2 className="event-name">{eventName}</h2>
        <h3 className="event-price">{eventPrice}</h3>
      </div>
    </div>
  );
};

export default Event;
