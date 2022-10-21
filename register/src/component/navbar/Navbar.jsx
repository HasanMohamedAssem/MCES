import React from 'react';
import "./Navbar.style.css"

export default function Navbar()
{

    return(

        <div className="nav-container">
            <div className="nav-left">
                <h3>MCES</h3>
            </div>
            <div className="nav-right">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
        </div>

    )


}