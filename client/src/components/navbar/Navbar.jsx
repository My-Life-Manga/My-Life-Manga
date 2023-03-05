import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const activeStyle = {
  fontWeight: "bold",
  color: "white",
};

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRef = useRef(null);

  function handleDropdownClick() {
    setIsDropdownActive((prevState) => !prevState);

    if (dropdownRef.current.classList.contains("show")) {
      dropdownRef.current.classList.remove("scale-up-ver-top");
      dropdownRef.current.classList.add("scale-up-ver-bottom");
    } else {
      dropdownRef.current.classList.remove("scale-up-ver-bottom");
      dropdownRef.current.classList.add("scale-up-ver-top");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" activeStyle={activeStyle}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" onClick={handleDropdownClick}>
              Dropdown
            </NavLink>
            <ul ref={dropdownRef} className={`dropdown-menu ${isDropdownActive ? "show scale-up-ver-top" : "scale-up-ver-bottom"}`} aria-labelledby="navbarDropdown">
              <li>
                <NavLink className="dropdown-item" to="/action">
                  Action
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Another action
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Something else here
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        {!isAuthenticated ? (
          <div className="d-flex">
            <NavLink to="/login" className="btn btn-outline-light me-2">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-light">
              Register
            </NavLink>
          </div>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
