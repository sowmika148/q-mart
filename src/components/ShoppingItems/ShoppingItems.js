import React from "react";
import './ShoppingItems.scss';
import items from '../../Utils/ShoppingList.js';
import Item from "../Item/Item";

const ShoppingItems = () => {
  return (
    <div className="shopping-items-container">
      {Object.entries(items).map(([key, value]) => {
        return (
          <Item item={value} id={key}/>
        )
      })}
    </div>
  )
}

export default ShoppingItems;
