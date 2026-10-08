import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import './Checkout.css';

export default function Checkout() {

  const { foods, cartItems, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
  });


  const totalAmount = foods.reduce((total, item) => {
    return total + (cartItems[item._id] || 0) * item.price;
  }, 0);


  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (totalAmount === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      userId: "6a587e47609e47026e36f99f", // Replace with logged-in user's ID later
      items: foods
        .filter((item) => cartItems[item._id])
        .map((item) => ({
          foodId: item._id,
          name: item.name,
          quantity: cartItems[item._id],
          price: item.price,
        })),
      amount: totalAmount,
      address,
    };

    try {
      const res = await API.post("/order/place", orderData);

      if (res.data.success) {
        clearCart(); 
        alert("Order placed successfully!");
        navigate("/");
      } else {
      alert(res.data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Full Name"
          value={address.name}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={address.address}
          onChange={handleChange}
          required
        />


        <h2>
          Total Amount: ₹{totalAmount}
        </h2>


        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}