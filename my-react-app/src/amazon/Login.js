import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useCart } from "./CartProvider";
// import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwrd = document.querySelector("#password");
  const { setLogin } = useCart();

  const handleClick = () => {
    if (passwrd) {
      const type =
        passwrd.getAttribute("type") === "password" ? "text" : "password";
      passwrd.setAttribute("type", type);

      passwrd.classList.toggle("bi-eye");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="login__logo"
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />{" "}
        .in
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 ? (
            <i
              className="bi bi-eye-slash"
              id="togglePassword"
              onClick={handleClick}
            ></i>
          ) : null}

          <button
            type="submit"
            className="login__signInButton"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>

      <div className="create-amazon">
        <div class="a-divider a-divider-break">
          <h5>New to Amazon?</h5>
        </div>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
