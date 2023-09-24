import React, { useState } from "react";
import menuItems from "./menuItems";
import "./Navbar.css";
import menuIcon from '../../../img/menuOpen.svg'; 
import closeIcon from '../../../img/menuClose.svg';
import logo from '../../../img/logo2.svg'; 
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div className="menu-icon" onClick={handleClick}>
            <img src={active ? closeIcon : menuIcon} alt="Menu" />
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <button className="btn"> <Link to='/'>Login</Link></button>
        </nav>
    );
};

export default Navbar;
