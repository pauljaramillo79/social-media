import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = () => {
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };
  return (
    <div className="Login">
      <div className="LoginForm">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={loginHandler}>Login</button>
        <h3>{errorMessage}</h3>
      </div>
    </div>
  );
};

export default Login;
