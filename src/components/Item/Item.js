import React from "react";
import './Items.scss';

const Item = (props) => {

  const {item, addToCart} = props;
  const addItemToCart = () => {
    addToCart(item);
  }

  return (
    <div className="item-container">
      <div className="image-container">
        <img src={item.path} width="200" height="200"/>
      </div>
      <div className="item-details">
        <div className="item-name">{item.name}</div>
        <div>{item.price}</div>
        <button className="add-to-cart" onClick={addItemToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
