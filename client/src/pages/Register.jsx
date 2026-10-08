import { useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './Register.css';

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
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
      const response = await API.post("/user/register", data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        toast.success("Registration Successful!");

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
    <div className="register">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          required
        />

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
          Register
        </button>

      </form>
    </div>
  );
}