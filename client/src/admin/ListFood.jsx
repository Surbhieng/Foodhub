import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

export default function ListFood() {
  const [foods, setFoods] = useState([]);

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

  const deleteFood = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (!confirmDelete) return;

    try {
      const res = await API.delete(`/food/${id}`);

      if (res.data.success) {
        alert("Food Deleted Successfully");
        fetchFoods(); // Refresh list
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="list-food">
      <h1>Food List</h1>

      {foods.map((food) => (
        <div
          key={food._id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={food.image}
            alt={food.name}
            width="100"
            height="80"
          />

          <div style={{ flex: 1 }}>
            <h3>{food.name}</h3>
            <p>{food.category}</p>
            <p>₹{food.price}</p>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>

  <Link to={`/admin/edit-food/${food._id}`}>
    <button
      style={{
        background: "green",
        color: "white",
        border: "none",
        padding: "10px 15px",
        cursor: "pointer",
      }}
    >
      Edit
    </button>
  </Link>

  <button
    onClick={() => deleteFood(food._id)}
    style={{
      background: "red",
      color: "white",
      border: "none",
      padding: "10px 15px",
      cursor: "pointer",
    }}
  >
    Delete
  </button>

</div>
        </div>
      ))}
    </div>
  );
}