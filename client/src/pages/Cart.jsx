import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { foods, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  const totalAmount = foods.reduce((total, item) => {
    return total + (cartItems[item._id] || 0) * item.price;
  }, 0);

  return (
    <div className="cart">

      <h1>My Cart</h1>

      {Object.keys(cartItems).length === 0 ? (
        <h2>Your cart is empty 🛒</h2>
      ) : (
       foods
        .filter((item) => cartItems[item._id])
        .map((item) => (

          <div className="cart-item" key={item._id}>

            <img src={item.image} alt={item.name} />

            <div className="cart-info">

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <div className="quantity">

                <button
                  onClick={() => removeFromCart(item._id)}
                >
                  -
                </button>

                <span>{cartItems[item._id]}</span>

                <button
                  onClick={() => addToCart(item._id)}
                >
                  +
                </button>

              </div>

            </div>

            <h2>
              ₹{item.price * cartItems[item._id]}
            </h2>

          </div>

        ))
     )}

      <hr />

      <h2>Total : ₹{totalAmount}</h2>

      <button className="checkout-btn"
      onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>

    </div>
  );
}