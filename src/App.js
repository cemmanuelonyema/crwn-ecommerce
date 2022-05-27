import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homePage/Homepage.jsx";
import ShopPage from "./pages/shop/ShopPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop " component={ShopPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
