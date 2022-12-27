import { Link } from 'react-router-dom';
import Home from './Home';
export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <h1>
        <Link to="/logs"> Captain's Log </Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
}
