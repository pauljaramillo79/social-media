import React, { useState } from "react";
import "./Register.css";

import Axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = () => {
    Axios.post("http://localhost:3001/user/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="Register">
      <div className="RegisterForm">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={submitRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
