import React, {useState} from "react";
import './Header.scss';
import Popup from 'reactjs-popup';
import CartItems from "../CartItems/CartItems";

const Header = (props) => {

  const {cartItems} = props;
  const [showCartItems, setShowCartItems] = useState(false);
  const closeCartItemsPopup = () => setShowCartItems(false);
  const showItems = () => {
    setShowCartItems(true);
  }

  return (
    <div className="header">
      <div>
        <span className="company-title">QMart</span>
      </div>
      <div className="cart-container">
        <span onClick={showItems}>Cart</span>
        <span className="cart-count">  {cartItems.size}</span>
      </div>
      {showCartItems &&
      <Popup className="cart-items-popup" closeOnDocumentClick={false}
             closeOnEscape={true} onClose={closeCartItemsPopup}
             open={showCartItems} position="top center"
      >
        <CartItems cartItems={cartItems}/>
      </Popup>}
    </div>
  );
}

export default Header;
