import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  return (
    <div className="Container">
      <div className="Navbar">
        <a href = "/" className="nav-a">
          <MenuIcon />
          All
        </a>
        <a href = "/Grocery" className="nav-a">Grocery</a>
        <a href = "/Mobiles" className="nav-a">Mobiles</a>
        <a href = "/Fashion" className="nav-a">Fashion</a>
      </div>
    </div>
  );
}
