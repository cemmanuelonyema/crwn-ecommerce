import React, { Component } from "react";
import './signinup.scss'
import SignIn from "../../components/signIn-Up/SignIn-Up";
import SignUp from "../../components/signIn-Up/SignUp";

export default class SignInPage extends Component {
  render() {
    return (
      <div className="signinup">
        <SignIn />
        <SignUp/>
      </div>
    );
  }
}
