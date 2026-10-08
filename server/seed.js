const mongoose = require("mongoose");
const Food = require("./models/Food");

mongoose.connect("mongodb://127.0.0.1:27017/foodApp");

const foods = [
  {
    name: "Margherita Pizza",
    description: "Cheesy delight with fresh basil",
    price: 299,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    category: "Pizza"
  },
  {
    name: "Veg Burger",
    description: "Loaded with fresh veggies",
    price: 199,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    category: "Burger"
  },
  {
    name: "White Sauce Pasta",
    description: "Creamy Italian pasta",
    price: 249,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    category: "Pasta"
  },
  {
    name: "Hyderabadi Biryani",
    description: "Spicy dum biryani",
    price: 349,
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=800",
    category: "Biryani"
  },
  {
    name: "French Fries",
    description: "Crispy golden fries",
    price: 149,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
    category: "Snacks"
  },
  {
    name: "Chocolate Cake",
    description: "Soft chocolate dessert",
    price: 199,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    category: "Dessert"
  }
];

async function seedData() {
  await Food.deleteMany();
  await Food.insertMany(foods);

  console.log("✅ Food data inserted");
  mongoose.connection.close();
}

seedData();