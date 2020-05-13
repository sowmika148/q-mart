import React, {useState} from "react";
import Header from "../Header/Header";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

const Dashboard = () => {

  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header cartCount={cartCount}/>
      <ShoppingItems/>
    </div>
  );
}

export default Dashboard;
