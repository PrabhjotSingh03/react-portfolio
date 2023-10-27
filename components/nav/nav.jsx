import React, { useState } from 'react';
import {Link} from 'react-scroll';
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
                    <li><Link tabindex="1" activeClass="active" to="navbar-container" spy={true} smooth={true}>Home</Link></li>
                    <li><Link tabindex="2" activeClass="active" to="aboutAndSkillsContainer" spy={true} smooth={true} duration={2000}>About</Link></li>
                    <li><Link tabindex="3" activeClass="active" to="projects__main__container" spy={true} smooth={true} duration={5000}>Projects</Link></li>
                    <li><Link tabindex="4" activeClass="active" to="experience__card" spy={true} smooth={true} duration={5000}>Experience</Link></li>
                    <li><Link tabindex="5" activeClass="active" to="education" spy={true} smooth={true} duration={6000}>Education</Link></li>
                    <li><Link tabindex="6" activeClass="active" to="footer" spy={true} smooth={true} duration={6000}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;