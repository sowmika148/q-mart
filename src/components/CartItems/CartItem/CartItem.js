import React from "react";
import './CartItems.scss';

const CartItem = (props) => {

  const {item} = props;

  return (
    <div className="item-container cart-item-container">
      <div className="image-container">
        <img src={item.path} width="100" height="100"/>
      </div>
      <div className="item-details cart-item-details">
        <div className="item-name">{item.name}</div>
        <div>{item.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
