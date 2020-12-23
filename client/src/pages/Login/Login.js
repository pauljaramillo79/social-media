import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
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
      </div>
    </div>
  );
};

export default Login;
