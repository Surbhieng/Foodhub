import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import "./AddFood.css";

export default function EditFood() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    try {
      const res = await API.get("/food");

      const selectedFood = res.data.find((item) => item._id === id);

      if (selectedFood) {
        setFood(selectedFood);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const updateFood = async (e) => {
    e.preventDefault();

    try {

      const res = await API.put(`/food/${id}`, food);

      if (res.data.success) {
        alert("Food Updated Successfully");
        navigate("/admin/list-food");
      } else {
        alert(res.data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="add-food">

      <h1>Edit Food</h1>

      <form onSubmit={updateFood}>

        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={food.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={food.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={food.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={food.category}
          onChange={handleChange}
        />

        <button type="submit">
          Update Food
        </button>

      </form>

    </div>
  );
}