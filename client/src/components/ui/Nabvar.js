/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="active nav-link" to="/">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="active nav-link" to="/stores">
                Stores
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="active nav-link" to="/suppliers">
                Suppliers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
