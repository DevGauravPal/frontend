import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import card_icon from "../Assets/cart_icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { navLinks } from "../../Context";
import { Link } from "react-router-dom";
import LoginSigup from "../../Pages/LoginSigup";
import Cart from "../../Pages/Card";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  console.log(menu);
  return (
    <div className="navbar container-fluid shadow align-items-center">
      <div className="container p-2">
        <div className="nav-logo d-flex gap-3 align-items-center">
          <img src={logo} alt="logo" className="img-fluid" />
          <p className="mb-0">SHOPPER</p>
        </div>
        <ul className="nav-menu d-flex gap-5  list-unstyled align-items-center mb-0">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <Link
                to={nav.link}
                className={`text-decoration-none ${
                  menu === nav.title ? "active" : ""
                } `}
                onClick={() => setMenu(nav.title)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-login-card d-flex align-items-center gap-5">
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/cart'>
            <img src={card_icon} alt="card icon" />
          </Link>
          <div className="nav-card-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
