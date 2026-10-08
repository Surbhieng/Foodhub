import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./SearchBar.css";

export default function SearchBar() {
  const { search, setSearch } = useContext(StoreContext);

  return (
    <section className="search">
      <h2>Find Your Favorite Food</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for pizza, burger, pasta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>Search</button>
      </div>
    </section>
  );
}