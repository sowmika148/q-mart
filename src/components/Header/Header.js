import React, {useState} from "react";
import './Header.scss';
import Popup from 'reactjs-popup';

const Header = (props) => {

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
        <span className="cart-count">  {props.cartItems.size}</span>
      </div>
      {showCartItems &&
      <Popup className="cart-items-popup" closeOnDocumentClick={false}
             closeOnEscape={true} onClose={closeCartItemsPopup}
             open={showCartItems} position="top center"
      >
        Cart Items
      </Popup>}
    </div>
  );
}

export default Header;
