import { useDispatch } from "react-redux";
import dataEvents from "../../dataEvents";
import { removeItemFromCart } from "../../redux/cartSlice";
import "./Cart.css";

const CartItem = ({ cartItem }) => {
  const events = dataEvents.find((item) => item.id === cartItem.eventId);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{cartItem.quantity} ticket(s)</p>
      <p>{events.eventName}</p>
      <p>Price: £{events.eventPrice * cartItem.quantity}</p>
      <span
        onClick={() => {
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }));
        }}
      >
        <img
          className="icon"
          src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
          width="20px"
          alt="binIcon"
        />
      </span>
    </div>
  );
};

export default CartItem;
