import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import SignInPage from "./pages/sign-in/SignInPage.jsx";
import ShopPage from "./pages/shop/ShopPage";
import Checkout from "./pages/checkout/Checkout";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: user})
      console.log(userAuth);
      // createUserProfileDocument(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          // this.setState({currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data()
          // }})
          console.log(snapshot);
          console.log(this.state);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
