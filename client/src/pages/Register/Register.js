import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="Register">
      <div className="RegisterForm">
        <h2>Register</h2>
        <input type="text" placeholder="username..." />
        <input type="text" placeholder="password..." />
        <button>Register</button>
      </div>
    </div>
  );
};

export default Register;
