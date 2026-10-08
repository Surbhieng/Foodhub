const Food = require("../models/Food");

// Get all foods
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Add new food
const addFood = async (req, res) => {
  try {
    const food = new Food(req.body);

    await food.save();

    res.json({
      success: true,
      message: "Food Added Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Food Deleted Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
       req.body,
       {new: true}
      );

    res.json({
      success: true,
      message: "Food Updated Successfully",
      food: updatedFood,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getFoods,
  addFood,
  deleteFood,
  updateFood,
};