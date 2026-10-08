import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  let user = null;

  try {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      user = JSON.parse(userData);
    }
  } catch {
    localStorage.removeItem("user");
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}