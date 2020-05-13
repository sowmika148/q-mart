import React from "react";
import './Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <span className="company-title">QMart</span>
      </div>
      <div className="cart-container">
        <span>Cart</span>
        <span className="cart-count">  {props.cartCount}</span>
      </div>
    </div>
  );
}

export default Header;
