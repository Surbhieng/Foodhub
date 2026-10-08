import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import AddFood from "./admin/AddFood";
import ListFood from "./admin/ListFood";
import Orders from "./admin/Orders";
import EditFood from "./admin/EditFood";
import AdminRoute from "./components/AdminRoute";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Menu Page */}
        <Route path="/menu" element={<Menu />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<MyOrders />} />

        <Route
          path="/admin/add-food"
          element={
            <AdminRoute>
              <AddFood />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/list-food"
          element={
            <AdminRoute>
              <ListFood />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/edit-food/:id"
          element={
            <AdminRoute>
              <EditFood />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;