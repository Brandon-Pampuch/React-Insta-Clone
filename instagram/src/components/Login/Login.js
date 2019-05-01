import React from "react";
import "./Login.scss";

const Login = () => {
  const loginFunc = event => {
    localStorage.setItem("username", event.target.value);
  };

  return (
    <div className="container login-form">
      <div>
        <h1>Login</h1>
        <form onSubmit={loginFunc}>
          <input className="login-form__login-input" type="text" />
        </form>
        <h1>Password</h1>
        <form onSubmit={loginFunc}>
          <input className="login-form__login-input" type="text" />
        </form>
      </div>
      <img src="http://www.logospng.com/images/15/instagram-logo-large-390x130-jonathan-jeter-15681.png" />
      <h2>(clone)</h2>
    </div>
  );
};

export default Login;
