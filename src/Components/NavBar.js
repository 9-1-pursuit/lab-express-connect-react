import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/logs">Captain's Log</Link>
            </h1>
            <button>
                <Link to="/logs/new">Create a New Log</Link>
            </button>    
        </nav>
    );
}

export default NavBar;