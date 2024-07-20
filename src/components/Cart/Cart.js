import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="cart-container">
      <img
        className="cartIcon"
        src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"
        alt="cart"
        width="80px"
      />
      <h3 className="cart-total">TOTAL PRICE: £{totalPrice}</h3>
      <div className="cart-items">
        {" "}
        {cartItems.map((cartItem, index) => (
          <CartItem
            key={`${cartItem.eventId}-${index}`}
            cartItem={cartItem}
          />
        ))}{" "}
      </div>
      <button>REMOVE ALL ITEMS FROM THE CART</button>
      <div></div>
    </div>
  );
};

export default Cart;
