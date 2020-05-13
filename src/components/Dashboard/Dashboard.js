import React, {useState} from "react";
import Header from "../Header/Header";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

const Dashboard = () => {

  const [cartItems, setCartItems] = useState(new Map());

  const addToCart = (item) => {
    let newCartItems = new Map(cartItems);
    newCartItems.set(item.id, item);
    setCartItems(newCartItems);
  }

  return (
    <div>
      <Header cartItems={cartItems}/>
      <ShoppingItems addToCart={addToCart}/>
    </div>
  );
}

export default Dashboard;
