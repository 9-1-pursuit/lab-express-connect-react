import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    return (
        <nav className='nav'>
            <Link to="/" className='home'>Captain's Log</Link>
            <Link to="/logs" className='logs side'>All Logs</Link>
            <Link to="/logs/new" className='new side'>New Log</Link>
        </nav>
    );
}

export default Nav;