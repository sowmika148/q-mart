import React, {useState} from "react";
import Header from "../Header/Header";

const Dashboard = () => {

  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header cartCount={cartCount}/>
    </div>
  );
}

export default Dashboard;
