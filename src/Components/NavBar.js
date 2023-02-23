import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/"> <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07ae07110940491.5ff860c7ab4c0.gif"
            width={120}
            height={90}
            alt='nav'
            />
        </Link>
      </h1>
      <button>
        <Link to="/logs">Logs</Link>
      </button>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>

    </nav>
  );
}
