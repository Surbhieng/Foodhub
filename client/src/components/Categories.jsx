import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./Categories.css";

const categories = [
  { id: 0, name: "All", emoji: "🍽️" },
  { id: 1, name: "Pizza", emoji: "🍕" },
  { id: 2, name: "Burger", emoji: "🍔" },
  { id: 3, name: "Pasta", emoji: "🍝" },
  { id: 4, name: "Biryani", emoji: "🍛" },
  { id: 5, name: "Drinks", emoji: "🥤" },
  { id: 6, name: "Dessert", emoji: "🍰" },
];

export default function Categories() {
  const { category, setCategory } = useContext(StoreContext);

  return (
    <section className="categories">
      <h2>Explore Our Menu</h2>

      <div className="category-list">
        {categories.map((item) => (
          <div
            key={item.id}
            className={`category-card ${
              category === item.name ? "active" : ""
            }`}
            onClick={() => setCategory(item.name)}
          >
            <span>{item.emoji}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}