import { useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Delicious Food <br />
          Delivered Fast
        </h1>

        <p>
          Fresh meals from your favorite restaurants,
          delivered right to your doorstep.
        </p>

        <button onClick={() => navigate("/menu")}>
          Order Now
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700"
          alt="Pizza"
        />
      </div>
    </section>
  );
}