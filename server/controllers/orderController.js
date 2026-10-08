const Order = require("../models/Order");


const placeOrder = async(req,res)=>{

    try{

        const order = new Order(req.body);

        await order.save();


        res.json({
            success:true,
            message:"Order placed successfully",
            order
        });


    }catch(error){

        res.json({
            success:false,
            message:error.message
        });

    }

};

const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });

    res.json({
      success: true,
      message: "Status Updated",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
    placeOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
};