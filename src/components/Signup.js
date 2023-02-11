import React from "react";
import { NavLink } from "react-router-dom";
import signup from "../assets/signnup.png";

class SignupPage extends React.Component {
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
    // store values of email and password in localStorage
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    alert("Account created successfully");
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="login-signup">
        <img src={signup} alt="myDomot" className="logotwo" />
        <div className="form">
          <p className="p-two">Hi there!</p>
          <p className="p-three">Create a new account</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name<span>*</span>
            </label>
            <input type="text" placeholder="First Name" required />
            <label>
              Last Name<span>*</span>
            </label>
            <input type="text" placeholder="Last Name" required />
            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
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
              placeholder="Password"
              required
            />

            <input type="submit" value="SIGN UP" />
          </form>
          <p className="p-four">Have an account already?</p>
          <NavLink to="/login">
            <button className="p-one">LOGIN</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SignupPage;
