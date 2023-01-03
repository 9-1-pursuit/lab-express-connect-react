import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav>
      <h1 className='home'>
        <Link to="/logs">Captain's Log</Link>
      </h1>
      
        <Link to="/logs/new">
           <button className='new-log'>
           New Log
           </button>
            
        </Link>
    </nav>
    );
};

export default NavBar;