import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div>
      <Navbar theme="Login/Regiter" />
      <form action="" className="form">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder=" abc@email.com" />
        <input type="text" placeholder="Your Password" />
        <input type="text" placeholder="Confirm Password" />

        <Link href="/map" className="mapLink">
          <button className="btn">SIGN UP </button>
        </Link>

        <div className="more_details">
          <p>Already have an account?</p>
          <Link href="/" className="signin_link">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
