import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { withPublic } from "../src/hook/route";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ auth }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, loginWithGoogle, logout } = auth;

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Apple Store</Link>
      </p>

      {!user ? (
        <button onClick={loginWithGoogle}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default withPublic(Navbar);
