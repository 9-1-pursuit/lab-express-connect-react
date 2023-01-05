import React from 'react'
import { Link } from "react-router-dom"


function Nav() {
    return (
        <nav className ="nav">
            <span> <Link className='homeLink' to="/">Home</Link></span> 
            <h1> <Link className='logsLink' to="/logs">Captain's Log</Link></h1>   
            <button className='newlogButton'> <Link className='newLogLink' to="/logs/new">New Log</Link> </button>
           
        </nav> 
    )
}

export default Nav

 {/* <Link className='EditLogLink' to="/logs/edit">Edit Log</Link>
            <Link className="HomeLink" to="/">Home</Link> */}


            // <Link to={`/logs/${index}`}><button>Cancel Edit</button>
            // </Link>