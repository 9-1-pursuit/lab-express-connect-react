import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
      <h1 className="home-page-link">
        <Link to="/logs">Captain's Log</Link>
      </h1>
        <Link to="/logs/new">
        <button className="new-captain">
          New Captain
      </button>
          </Link>
      
    </nav>
  );
}
