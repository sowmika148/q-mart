import React, {useState} from "react";
import Header from "../Header/Header";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

const Dashboard = () => {

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState(new Map());

  const addToCart = (item) => {
    let newCartItems = new Map(cartItems);
    newCartItems.set(item.id, item);
    setCartItems(newCartItems);
    setCartCount(newCartItems.size);
  }

  return (
    <div>
      <Header cartCount={cartCount}/>
      <ShoppingItems addToCart={addToCart}/>
    </div>
  );
}

export default Dashboard;
