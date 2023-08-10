import React from "react";
import logo from "./assets/octopath_emblem_white.jpg";

function Header() {
    return (
      <div>
        <img src={logo} alt="Octopath Traveler Logo" id="main-header" />
      </div>
    );
  }

export default Header;