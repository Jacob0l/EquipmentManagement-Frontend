import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <Link className="navbar-icon-container" to={'/dashboard'}><FontAwesomeIcon icon={faScrewdriverWrench} /></Link>
            <ul className="navlink-container">
                <li><NavLink to={'/dashboard'} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Dashboard</NavLink></li>
                <li><NavLink to={'/equipment'} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Equipment</NavLink></li>
                <li><NavLink to={'/maintenance'} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Maintenance</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar