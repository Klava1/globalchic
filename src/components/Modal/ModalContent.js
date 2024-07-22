import "./Modal.css";

const ModalContent = ({ setIsOpen }) => {
  return (
    <div className="modal_content">
      <div>
        <h2>Event Name: Summer Music Festival</h2>
        <h3>Date: July 24, 2024</h3>
        <p>
          Join us for a day of incredible music, food, and fun at the Summer
          Music Festival. Featuring top artists from around the world, this
          event promises to be a memorable experience. Gates open at 12 PM and
          the festivities continue until midnight. Don't miss out on this
          extraordinary celebration of music and community!
        </p>
      </div>
      <button onClick={() => setIsOpen(false)}>Close Modal</button>
    </div>
  );
};

export default ModalContent;
