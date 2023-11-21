import React from "react";

const Navbar = ({ theme }) => {
  return (
    <div className="navbar">
      <div className="navber_container">
        {" "}
        <div className="logo">
          <p>
            NU{" "}
            <span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 56 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="56" height="58.5" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_37_1648"
                      transform="scale(0.00892857 0.00854701)"
                    />
                  </pattern>
                  <image
                    id="image0_37_1648"
                    width="112"
                    height="117"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </span>
            vents
          </p>
        </div>
        <div className="navigation">
          <p>Home</p>
          <p>About</p>
          <p>Pages</p>
          <p>News</p>
          <p>Contact</p>
          <p>Login/Register</p>
        </div>
      </div>
      <div className="hero">
        <p className="hero_name">{theme}</p>
      </div>
    </div>
  );
};

export default Navbar;
