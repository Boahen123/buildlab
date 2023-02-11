import React from "react";
import { NavLink } from "react-router-dom";
import login from "../assets/login.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // retrieve values of email and password from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    // if the stored email and password match the inputted values, redirect user to homepage
    if (
      storedEmail === this.state.email &&
      storedPassword === this.state.password
    ) {
      window.location.href = "/";
    } else {
      alert("Incorrect email or password");
    }
  };

  render() {
    return (
      <>
        <div className="login-signup">
          <img src={login} alt="myDomot" className="logo" />
          <div className="form">
            <p className="p-two">Hello there! Welcome back</p>
            <p className="p-three">Log in to your account</p>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <a href="#" className="forgot">
                Forgot Password?
              </a>
              <input type="submit" value="LOGIN" />
            </form>
            <p className="p-four">Don't have an account?</p>
            <NavLink to="/signup">
              <button className="p-one">CREATE AN ACCOUNT</button>
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
