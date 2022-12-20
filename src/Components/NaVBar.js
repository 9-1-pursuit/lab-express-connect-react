import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">Captain Log's</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
}
