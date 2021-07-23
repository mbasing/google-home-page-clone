import React from "react";
import initial from "../images/initial.png";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="dummy">Gmail</a>
        </li>
        <li>
          <a href="dummy">Images</a>
        </li>
        <li class="circular-background" style={{ paddingTop: "1.6rem" }}>
          <a href="dummy">
            <svg class="dots" focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </a>
        </li>
        <li className="circular-background" style={{ paddingTop: "1.2rem" }}>
          <a href="dummy">
            <img src={initial} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
