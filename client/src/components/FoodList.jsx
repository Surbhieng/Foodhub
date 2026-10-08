import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodCard from "./FoodCard";
import "./FoodList.css";

export default function FoodList() {
  const { foods, search, category } = useContext(StoreContext);

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="food-list">
      <h2>Popular Dishes</h2>

      <div className="foods">
        {filteredFoods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </section>
  );
}