import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/logs">Captain's Log</Link>
        <Link to="/logs/new">New Log</Link>
      </nav>
    </div>
  );
}

export default Nav;
