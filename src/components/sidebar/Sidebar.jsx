import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon";
import { FaAlignRight } from "react-icons/fa";

import "./sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar, currentUser }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-links" onClick={toggleSidebar}>
        <div className="link">
          <Link to="/shop" onClick={toggleSidebar}>
            SHOP
          </Link>
        </div>
        <div className="link">
          <Link to="/contact" onClick={toggleSidebar}>
            CONTACT
          </Link>
        </div>

        {currentUser ? (
          <div className="link" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <div className="link">
            <Link to="/signin">SIGN IN</Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
