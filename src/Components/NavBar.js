import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1 className="welcomeh1">Welcome to Captain's Logs</h1>
      <Link id="logs" to="/logs">
        Logs
      </Link>
      <Link id="newLog" to="/logs/new">
        New Log
      </Link>
    </nav>
  );
};

export default NavBar;
