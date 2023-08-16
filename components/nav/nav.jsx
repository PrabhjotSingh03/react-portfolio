import React, { useState } from 'react';
import './nav.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
            <div className='navbar-container'>
                <div className="main-icon">
                    <img src="/images/icon.png" className="logo" alt="" />
                </div>
                <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}> {/* a ternary conditional operator to conditionally add a CSS class to an HTML element based on the value of the menuOpen state variable.*/}
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`main-menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;