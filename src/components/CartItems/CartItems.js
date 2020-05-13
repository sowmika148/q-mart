import React from "react";
import './CartItems.scss';
import CartItem from "./CartItem/CartItem";

const CartItems = (props) => {

  const {cartItems, addQuantity, removeQuantity} = props;
  const computeTotal = () => {
    let total = 0;
    [...cartItems.keys()].forEach(key => total += cartItems.get(key).quantity * cartItems.get(key).price);
    return total;
  };

  return (
    <div className="cart-items-container">
      {cartItems.size ?
        <div>
          <div className="cart-items-header">
            <span className="total-amount">Total: Rs.{computeTotal()}</span>
          </div>
          {[...cartItems.keys()].map(key => {
            return (
              <CartItem item={cartItems.get(key)} id={key}
                        addQuantity={addQuantity}
                        removeQuantity={removeQuantity}/>
            )
          })}
        </div>
        :
        <div className="no-items">Your Shopping Cart is empty.</div>}
    </div>
  );
}

export default CartItems;
