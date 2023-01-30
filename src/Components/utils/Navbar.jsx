import React from "react";
import { useState } from "react";
import "./Navbar.scss";

export function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 480) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <a href="/" className="brand-name">
                Omega
            </a>

            <button className="hamburger"
            onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            alt="menu">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                 fill="white"
            >
                <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
                />
            </svg>
            </button>

            <ul className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <div className="li-box">
                    <li>
                        <a className="active" href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/About">A Propos</a>
                    </li>
                    <li>
                        <a href="/Dons">Dons</a>
                    </li>
                    <li>
                        <a href="/Contacts">Contacts</a>
                    </li>
                </div>
            </ul>
        </nav>
      )
}