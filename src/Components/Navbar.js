import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav2">
      <nav>
        <div className="img">
          <img src="Images/Bharat 2.png"></img>
        </div>
        <div>
          <Link to="/">
            <a className="home">Home</a>
          </Link>
          <Link to="./about">
            <a>About</a>
          </Link>
          <Link to="./shop">
            <a href="">Shop</a>
          </Link>
          <Link to="./contact">
            <a href="">Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
