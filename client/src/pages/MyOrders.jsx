import { useEffect, useState } from "react";
import API from "../api/axios";
import "./MyOrders.css";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;


  useEffect(() => {
    if(userId){
      fetchOrders();
    }

   }, [userId]);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/order/user/${userId}`);

      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="orders">

    {
      !user ? (
        <h2>Please login to see your orders</h2>
      ) : (
        <>
          <h1>My Orders</h1>

          {orders.length === 0 ? (
            <h2>No Orders Found</h2>
          ) : (
            orders.map((order) => (
              <div className="order-card" key={order._id}>

                <h3>Status: {order.status}</h3>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

                <p>
                  <strong>Total:</strong> ₹{order.amount}
                </p>

                <p>
                  <strong>Name:</strong> {order.address.name}
                </p>

                <p>
                  <strong>Phone:</strong> {order.address.phone}
                </p>

                <p>
                  <strong>Address:</strong> {order.address.address}
                </p>

                <h4>Items</h4>

                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} × {item.quantity} = ₹
                      {item.quantity * item.price}
                    </li>
                  ))}
                </ul>

                <hr />

              </div>
            ))
          )}
        </>
      )
    }
   </div>
  );
}