import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav id="nav-bar">
      <Link to="/logs">Captain's Log</Link>
      <Link to="/logs/new">New Log</Link>
    </nav>
  );
}
