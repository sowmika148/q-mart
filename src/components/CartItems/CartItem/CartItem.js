import React from "react";
import './CartItems.scss';

const CartItem = (props) => {

  const {item, addQuantity, removeQuantity} = props;

  const decreaseQuantity = () => {
    removeQuantity(item);
  }

  const increaseQuantity = () => {
    addQuantity(item);
  }

  return (
    <div className="item-container cart-item-container">
      <div className="image-container">
        <img src={item.path} width="100" height="100"/>
      </div>
      <div className="item-details cart-item-details">
        <div className="item-name">{item.name}</div>
        <div>Rs. {item.price}</div>
        <div>
          <button className="minus-button" onClick={decreaseQuantity}>-</button>
          {item.quantity}
          <button className="plus-button" onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
