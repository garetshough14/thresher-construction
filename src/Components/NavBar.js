import React from "react";
import "../CSS/navbar.css";
import MainLogo from "../Images/branding-logos/tclogo.png";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="top-nav">
        <div className="logo-container">
          <img
            className="main-logo"
            src={MainLogo}
            alt="Thresher Construction Logo"
          />
        </div>
        <div className="contact-wrapper">
          <div className="phone-container">
            <BsTelephoneForward style={{ fontSize: "30px" }} />
          </div>
          <div className="contact-container">
            <a className="phone-number" href="">
              (661) 213-6125
            </a>
            <p className="contact-description">Call us for free consultation</p>
          </div>
          <button className="free-quotes-button">
            FREE QUOTES <AiOutlineArrowRight style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
      <div className="bottom-nav">
        <ul className="bottom-nav-items">
          <li className="single-nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="single-nav-item">
            <Link to="/services">OUR SERVICES</Link>
          </li>
          <li className="single-nav-item">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="single-nav-item">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
