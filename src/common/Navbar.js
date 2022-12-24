import { Link } from "react-router-dom";
import "../common/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-inner-contaniner">
        {/* <Link id="home-link" to="/">
          Home
        </Link> */}
        <Link id="index-link" to="/logs">
          Logs
        </Link>
        <Link id="new-link" to="/logs/new">
          Create New Log
        </Link>
      </div>
    </nav>
  );
}
