import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" exact to="/">
          K2
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/crud">
                Crud
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;