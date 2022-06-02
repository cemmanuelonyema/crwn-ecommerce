import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import SignInPage from "./pages/sign-in/SignInPage.jsx";
import ShopPage from "./pages/shop/ShopPage";
import {auth} from './firebase/firebase.utils'

class App extends Component {
    state={
        currentUser: null
    }

    unsubscribeFromAuth= null;
    componentDidMount(){
     this.unsubscribeFromAuth =   auth.onAuthStateChanged((user) =>{
            this.setState({currentUser: user})
            console.log(user);
        })
    }
  componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
