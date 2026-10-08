const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [
        {
            foodId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Food"
            },
            name: String,
            quantity: Number,
            price: Number
        }
    ],

    amount: {
        type: Number,
        required: true
    },

    address: {
        name: String,
        phone: String,
        address: String
    },

    status: {
        type: String,
        default: "Order Placed"
    }

}, { timestamps: true });


module.exports = mongoose.model("Order", orderSchema);