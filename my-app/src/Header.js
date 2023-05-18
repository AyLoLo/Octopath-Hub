import React from "react";
import logo from "./assets/Octopath-Traveler-Logo.jpg";

function Header() {
    return (
      <div>
        <img src={logo} alt="Octopath Traveler Logo" id="main-header" />
      </div>
    );
  }

export default Header;