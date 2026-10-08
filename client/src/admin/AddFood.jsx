import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./AddFood.css";

const sampleFoods = [
  // 🍕 PIZZA
  {
    name: "Farmhouse Pizza",
    description: "Loaded with fresh vegetables and mozzarella cheese",
    price: 249,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700",
  },
  {
    name: "Paneer Tikka Pizza",
    description: "Spicy paneer tikka with onions and capsicum",
    price: 279,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700",
  },
  {
    name: "Corn & Cheese Pizza",
    description: "Sweet corn topped with lots of melted cheese",
    price: 229,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c8a03c?w=700",
  },
  {
    name: "Veggie Supreme Pizza",
    description: "Fresh vegetables, olives and mozzarella cheese",
    price: 299,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=700",
  },
  {
    name: "Peri Peri Pizza",
    description: "Spicy peri peri sauce with vegetables and cheese",
    price: 279,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700",
  },
  {
    name: "Cheese Burst Pizza",
    description: "Extra cheesy pizza with a creamy cheese-filled crust",
    price: 299,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700",
  },

  // 🍔 BURGER
  {
    name: "Cheese Burger",
    description: "Crispy veg patty with fresh vegetables and cheese",
    price: 229,
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
  },
  {
    name: "Paneer Burger",
    description: "Grilled paneer patty with fresh vegetables",
    price: 249,
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=700",
  },
  {
    name: "Crispy Veg Burger",
    description: "Crispy vegetable patty with lettuce and creamy sauce",
    price: 219,
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700",
  },
  {
    name: "Double Cheese Burger",
    description: "Double patty burger with double cheese",
    price: 279,
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
  },

  // 🍝 PASTA
  {
    name: "Red Sauce Pasta",
    description: "Pasta tossed in rich tomato and herb sauce",
    price: 219,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700",
  },
  {
    name: "Pink Sauce Pasta",
    description: "Creamy blend of tomato and white sauce",
    price: 239,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700",
  },
  {
    name: "Pesto Pasta",
    description: "Italian pasta tossed in fresh basil pesto",
    price: 249,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
  },
  {
    name: "Alfredo Pasta",
    description: "Creamy Alfredo pasta with herbs and parmesan",
    price: 259,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=700",
  },

  // 🥤 DRINKS
  {
    name: "Cold Coffee",
    description: "Chilled creamy coffee topped with chocolate",
    price: 129,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700",
  },
  {
    name: "Chocolate Shake",
    description: "Rich and creamy chocolate milkshake",
    price: 149,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700",
  },
  {
    name: "Oreo Shake",
    description: "Creamy milkshake blended with Oreo cookies",
    price: 169,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700",
  },
  {
    name: "Mango Shake",
    description: "Refreshing mango shake made with fresh mangoes",
    price: 139,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=700",
  },
  {
    name: "Strawberry Shake",
    description: "Sweet and creamy strawberry milkshake",
    price: 149,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1553787499-6f9133860277?w=700",
  },
  {
    name: "Mango Lassi",
    description: "Refreshing traditional mango yogurt drink",
    price: 119,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700",
  },
  {
    name: "Fresh Lime Soda",
    description: "Refreshing lime soda with a hint of mint",
    price: 99,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700",
  },
  {
    name: "Iced Tea",
    description: "Chilled refreshing tea with lemon",
    price: 99,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700",
  },

  // 🍰 DESSERT
  {
    name: "Chocolate Brownie",
    description: "Soft and fudgy chocolate brownie",
    price: 129,
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=700",
  },
  {
    name: "Red Velvet Cake",
    description: "Soft red velvet cake with creamy frosting",
    price: 199,
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=700",
  },
  {
    name: "Chocolate Mousse",
    description: "Smooth and creamy chocolate mousse",
    price: 159,
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700",
  },
  {
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream topped with chocolate and nuts",
    price: 149,
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700",
  },

  // 🍛 BIRYANI
  {
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with flavorful spices",
    price: 349,
    category: "Biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=700",
  },
  {
    name: "Veg Biryani",
    description: "Fragrant basmati rice cooked with fresh vegetables",
    price: 249,
    category: "Biryani",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700",
  },
  {
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in Indian spices",
    price: 229,
    category: "Biryani",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700",
  },
];

export default function AddFood() {
  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  // Add one food manually
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/food/add", food);

      if (res.data.success) {
        alert("Food Added Successfully");
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  // Add all sample foods
  const handleAddSampleFoods = async () => {
    let added = 0;
    let failed = 0;

    try {
      for (const item of sampleFoods) {
        try {
          const res = await API.post("/food/add", item);

          if (res.data.success) {
            added++;
            console.log(`${item.name} added successfully`);
          } else {
            failed++;
            console.log(`${item.name} failed:`, res.data.message);
          }
        } catch (error) {
          failed++;
          console.log(`Error adding ${item.name}:`, error);
        }
      }

      alert(
        `${added} foods added successfully!\n${failed} foods failed.`
      );

      // Go back to home after adding
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong while adding foods.");
    }
  };

  return (
    <div className="add-food">
      <h1>Add Food</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={food.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={food.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={food.image}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={food.category}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Food
        </button>
      </form>

      <hr />

      <button
        type="button"
        onClick={handleAddSampleFoods}
        className="sample-food-btn"
      >
        Add Sample Foods
      </button>
    </div>
  );
}