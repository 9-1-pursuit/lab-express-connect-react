import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/logs">Captain's Log</Link>
      &nbsp;
      <Link to="/logs/new">Add a new Log</Link>
    </nav>
  );
}