import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Categories/>
      <SearchBar/>
      <FoodList />
    </>
  );
}