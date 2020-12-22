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
              <Link activeClassName="active" to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link activeClassName="active" to="/stores" className="nav-link">
                Stores
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                activeClassName="active"
                to="/suppliers"
                className="nav-link"
              >
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
