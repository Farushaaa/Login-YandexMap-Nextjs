import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Form = () => {
  return (
    <div>
      <Navbar theme="Login/Register" />
      <form action="" className="form">
        <input type="text" placeholder={" abc@email.com"} />
        <input type="text" placeholder="Your Password" />
        <div className="details">
          <div className="toggle">
            <p>Remember Me</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p>Forgot Password?</p>
        </div>
        <Link href="/map" className="mapLink">
          <button className="btn">SIGN IN </button>
        </Link>

        <div className="more_details">
          <p>Don't have an account?</p>
          <Link href="/signup" className="signup_link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
