import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/Form-input";
import "./signIn.style.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password </p>

        <form onSubmit={this.handleSubmit}>
          {" "}
          <FormInput
            handleChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="email"
            id="email"
            label="email"
            required
          />
          {/* <label htmlFor="email">Email</label> */}
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            name="password"
            htmlFor="password"
            type="password"
            id="password"
            label="password"
            required
          />
          {/* <label htmlFor="password">Password</label> */}
          <div className="buttons">
          <Button type="submit"> Sign In </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </Button>
          </div>
        </form>
      </div>
    );
  }
}
