import "./FoodCard.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function FoodCard({ food }) {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-info">
        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-bottom">
          <span className="price">₹{food.price}</span>

          <button onClick={() => addToCart(food._id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}