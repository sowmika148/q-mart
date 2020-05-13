import React from "react";
import './Items.scss';

const Item = (props) => {
  return (
    <div className="item-container">
      <div className="image-container">
        <img src={props.item.path} width="200" height="200"/>
      </div>
      <div className="item-details">
        <div className="item-name">{props.item.name}</div>
        <div>{props.item.price}</div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
