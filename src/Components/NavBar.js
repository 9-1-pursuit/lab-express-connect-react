import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav__bar">
      <Link className="nav__link" to="/">
        Home
      </Link>
      <Link className="nav__link" to="/logs">
        <h3>Captain's Log</h3>
      </Link>
      <button className="nav__button">
        <Link className="nav__link" to="/logs/new">
          New Log
        </Link>
      </button>
    </div>
  );
}
