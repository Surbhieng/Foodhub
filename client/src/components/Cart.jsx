import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Cart() {

  const { cartItems, foods, removeFromCart } = useContext(StoreContext);

  return (
    <div>
      <h1>Your Cart</h1>

      {
        foods.map((food)=>{

          if(cartItems[food._id] > 0){

            return (
              <div key={food._id}>

                <img 
                  src={food.image}
                  width="100"
                />

                <h3>{food.name}</h3>

                <p>
                  Quantity: {cartItems[food._id]}
                </p>

                <p>
                  Price: ₹{food.price * cartItems[food._id]}
                </p>

                <button
                  onClick={()=>removeFromCart(food._id)}
                >
                  Remove
                </button>

              </div>
            )
          }

        })
      }

    </div>
  )
}