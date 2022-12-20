import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">Captain's Log</Link>

        <button>
          <Link to="logs/new">New Log</Link>
        </button>
      </h1>
    </nav>
  );
}

export default NavBar;
