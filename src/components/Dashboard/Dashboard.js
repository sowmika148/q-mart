import React, {useState} from "react";
import Header from "../Header/Header";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

const Dashboard = () => {

  const [cartItems, setCartItems] = useState(new Map());

  const addQuantity = (item) => {
    const newItem = Object.assign({},item, {quantity: item.quantity+1});
    let newCartItems = new Map(cartItems);
    newCartItems.set(item.id, newItem);
    setCartItems(newCartItems);
  }

  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      let newCartItems = new Map(cartItems);
      newCartItems.delete(item.id);
      setCartItems(newCartItems);
      return;
    }
    const newItem = Object.assign({},item, {quantity: item.quantity-1});
    let newCartItems = new Map(cartItems);
    newCartItems.set(item.id, newItem);
    setCartItems(newCartItems);
  }

  const addToCart = (item) => {
    const newItem = Object.assign({},item, {quantity: 10});
    let newCartItems = new Map(cartItems);
    newCartItems.set(item.id, newItem);
    setCartItems(newCartItems);
  }

  return (
    <div>
      <Header cartItems={cartItems}
              addQuantity={addQuantity}
              removeQuantity={decreaseQuantity}/>
      <ShoppingItems addToCart={addToCart}/>
    </div>
  );
}

export default Dashboard;
