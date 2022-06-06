import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <Link to="/" className="nav-link" onClick={() => auth.signOut()}>
            SIGN-OUT
          </Link>
        ) : (
          <Link to="/sign-in" className="nav-link">
            SIGN-IN
          </Link>
        )}
      </nav>
    </div>
  );
};

// state param = rootReducer hence === state.user.currentUser === rootReducer.user.currentUser
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
