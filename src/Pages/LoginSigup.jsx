import React from "react";
import "./CSS/LoginSignup.css";

const LoginSigup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" name="" id="" />
          <button>Continue</button>
          <p className="loginsignuo-login mb-0">
            Already have an account? <span>Login</span>
          </p>
        </div>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p className="mb-0">
              By continuing i agree to the terms of use & privacy policy.
            </p>
          </div>
      </div>
    </div>
  );
};

export default LoginSigup;
