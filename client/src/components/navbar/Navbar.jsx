import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const activeStyle = {
  fontWeight: "bold",
  color: "white",
};

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  function handleLogout() {
    removeCookie("authToken");
    setIsAuthenticated(false);
    history.push("/login");
  }

  useEffect(() => {
    if (cookies.authToken) {
      setIsAuthenticated(true);
    }
  }, [cookies]);

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
            <li className="nav-item">
              <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
