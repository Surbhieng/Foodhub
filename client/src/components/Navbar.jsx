import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./Navbar.css";

export default function Navbar() {
  const { getCartCount } = useContext(StoreContext);
  const navigate = useNavigate();

  let user = null;

  try {
    const userData = localStorage.getItem("user");

    if (userData && userData !== "undefined") {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.log("Invalid user data in localStorage");
    localStorage.removeItem("user");
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🍔 FoodieHub</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>

      <div className="nav-buttons">
        {user ? (
          <>
            <span className="welcome">👋 Hi, {user.name}</span>

            <Link to="/orders">
              <button>My Orders</button>
            </Link>

            {user.role === "admin" && (
              <>
                <Link to="/admin/add-food">
                  <button>Add Food</button>
                </Link>

                <Link to="/admin/list-food">
                  <button>Food List</button>
                </Link>

                <Link to="/admin/orders">
                  <button>Orders</button>
                </Link>
              </>
            )}

            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>

            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}

        <Link to="/cart">
          <button>Cart 🛒 ({getCartCount()})</button>
        </Link>
      </div>
    </nav>
  );
}