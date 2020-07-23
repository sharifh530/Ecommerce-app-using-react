import React from "react";

import CustomButton from "../custom-button/custom-buttom";

import "./cart-dropdown.scss";
import CartIcon from "../cart-icon/cart-icon";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
