import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ScNav } from "./scParts";

const Navigation = () => {
  const { cart } = useContext(CartContext);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
