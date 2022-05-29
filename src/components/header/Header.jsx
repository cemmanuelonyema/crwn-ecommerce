import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/084 crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        {" "}
        <Logo className="logo" />{" "}
      </Link>
      <nav className="nav">
        <Link to="/shop" className="nav-link">
          SHOP{" "}
        </Link>
        <Link to="/contact" className="nav-link">
          CONTACT{" "}
        </Link>
        <Link to="/sign-in" className="nav-link">
          SIGN-IN{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
