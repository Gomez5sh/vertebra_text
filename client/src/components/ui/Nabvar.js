import React from "react";
import { NavLink, Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Vertebra CRUD app
        </Link>
        <div className="collpase nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink to="/" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/store" className="nav-link">
                Stores
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/suppliers" className="nav-link">
                Suppliers
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
