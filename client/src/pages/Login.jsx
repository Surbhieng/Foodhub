import { useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/user/login", data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
         localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
        toast.success("Login Successful!");

        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
}