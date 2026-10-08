import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";

export default function Menu() {
  return (
    <>
      <Navbar />
      <Categories />
      <SearchBar />
      <FoodList />
    </>
  );
}