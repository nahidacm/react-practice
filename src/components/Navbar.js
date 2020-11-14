import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-link" to="/todo">Todo</Link>
                <Link className="nav-link" to="/counter">Counter</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
