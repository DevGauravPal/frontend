import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagra_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer d-flex container align-items-center justify-content-center">
      <div className="footer-logo d-flex gap-4 align-items-center">
        <img src={footer_logo} alt="footer logo" />
        <p className="mb-0">SHOPPER</p>
      </div>
      <ul className="footer-links d-flex gap-5  list-unstyled align-items-center mb-0">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagra_icon} alt="instagram icons" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="pintester_icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All rihgt reserved </p>
      </div>
    </div>
  );
};

export default Footer;
