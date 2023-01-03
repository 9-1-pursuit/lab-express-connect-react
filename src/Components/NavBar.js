import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1>
        <Link to="/logs">Captain's Log</Link>
      </h1>
      <button className="NewLog">
        <Link to="logs/new">Create</Link>
      </button>
    </nav>
  );
}

export default NavBar;
