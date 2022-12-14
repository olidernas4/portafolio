import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
    <nav className="nav container">
        <a href="index.html" className="nav__logo">olider</a>
        <div className="nav__menu">
            <ul className="nav__list grid">
             <li className="nav__item">
                 <a href="" className="nav__link">
                    <i className="uil uil- nav__icon"></i>
                 </a>
                </li>

                <li className="nav__item">
                 <a href="#Home" className="nav__link">
                    <i className="uil uil-home nav__icon"></i>Home
                 </a>
                </li>


                <li className="nav__item">
                 <a href="#About" className="nav__link">
                    <i className="uil uil-user nav__icon"></i>About
                 </a>
                </li>

                <li className="nav__item">
                 <a href="#Skills" className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i>Skills
                 </a>
                </li>

                <li className="nav__item">
                 <a href="#Services" className="nav__link">
                    <i className="uil uil-briefcase-alt nav__icon"></i>Services
                 </a>
                </li>

                <li className="nav__item">
                 <a href="#portafolio" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i>portafolio
                 </a>
                </li>

                <li className="nav__item">
                 <a href="#contact" className="nav__link">
                    <i className="uil uil-message nav__icon"></i>Contact
                 </a>
                </li>


            </ul>

            <i class="uil uil-times nav__close"></i>
            </div>
            <div className="nav__toggle">
                <i class="uil uil apps"></i>
            </div>
        
    </nav>
    </header>

  )
}

export default Header
