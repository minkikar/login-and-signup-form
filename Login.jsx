import React, { useState } from "react";
import user_icon from "./person.png";
import email_icon from "./email.png";
import password_icon from "./password.png";
import "./Login.css";
export const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="Inputs">
      {action === "LogIn" ? (
        <div></div>
      ) : (
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" id="name" autoComplete="name"/>
        </div>
      )}
      
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email ID" id="email" autoComplete="email"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" id="password"/>
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgetpassword">
          Lost Password? <span>click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "LogIn" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("LogIn");
          }}
        >
          LogIn
        </div>
      </div>
    </div>
  );
};
