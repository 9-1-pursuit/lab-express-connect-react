import { Link } from "react-router-dom";
import captainLogo from "./captainLogo.jpeg";

export default function NavBar({ theme, toggleTheme }) {
  return (
    <nav>
      <div style={{ display: "flex" }}>
        <Link
          to="/logs"
          id="logo"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <img src={captainLogo} alt="Captain's Logo"></img>
        </Link>
        <h1>
          <Link
            to="/logs"
            id="h1"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Captain's Logs
          </Link>
        </h1>
      </div>
      <div>
        <button id="mode" onClick={toggleTheme}>{`${theme} Mode`}</button>
        <button>
          <Link
            to="/logs/new"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            New Log
          </Link>
        </button>
      </div>
    </nav>
  );
}
