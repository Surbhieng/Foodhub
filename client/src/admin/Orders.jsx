import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Orders() {

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    getAllOrders();
  }, []);


  const getAllOrders = async () => {
    try {
      const res = await API.get("/order/all");

      setOrders(res.data.orders);

    } catch (error) {
      console.log(error);
    }
  };


  // ADD THIS FUNCTION HERE 👇
  const updateStatus = async (id, status) => {
    try {

      await API.put(`/order/status/${id}`, {
        status
      });

      getAllOrders(); // refresh orders after update

    } catch(error) {
      console.log(error);
    }
  };


  return (
    <div>

      <h1>All Orders</h1>

      {
        orders.map((order) => (

          <div key={order._id}>

            <h2>{order.address.name}</h2>

            <p>
              Phone: {order.address.phone}
            </p>

            <p>
              Address: {order.address.address}
            </p>

            <h3>
              Total: ₹{order.amount}
            </h3>


            {/* Replace h4 with dropdown */}
            <select
              value={order.status}
              onChange={(e)=>updateStatus(order._id, e.target.value)}
            >

              <option value="Order Placed">
                Order Placed
              </option>

              <option value="Preparing">
                Preparing
              </option>

              <option value="Out for Delivery">
                Out for Delivery
              </option>

              <option value="Delivered">
                Delivered
              </option>

            </select>


            {
              order.items.map((item) => (
                <p key={item._id}>
                  {item.name} × {item.quantity}
                </p>
              ))
            }

            <hr />

          </div>

        ))
      }

    </div>
  );
}