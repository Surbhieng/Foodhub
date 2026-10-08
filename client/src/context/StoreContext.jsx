import { createContext, useEffect, useState } from "react";
import API from "../api/axios";

export const StoreContext = createContext();

export default function StoreContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch food from backend
  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await API.get("/food");
      setFoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (updated[itemId] > 1) {
        updated[itemId]--;
      } else {
        delete updated[itemId];
      }

      return updated;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getCartCount = () => {
    let count = 0;

    for (const item in cartItems) {
        count += cartItems[item];
    }

    return count;
  };

  return (
    <StoreContext.Provider
      value={{
        foods,
        cartItems,
        search,
        setSearch,
        category,
        setCategory,
        addToCart,
        removeFromCart,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}