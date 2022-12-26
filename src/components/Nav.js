import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/logs/:index">Index</Link>
        <Link to="/logs/new">New</Link>
      </nav>
    </div>
  );
}

export default Nav;
