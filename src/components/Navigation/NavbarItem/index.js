import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarItem.css";

export default function NavbarItem({ to, label }) {
  return (
    <li className="nav-li">
      <NavLink exact to={to} className="nav-item" activeClassName="active">
        {label}
      </NavLink>
    </li>
  );
}
