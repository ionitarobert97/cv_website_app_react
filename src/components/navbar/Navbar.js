import React, { Component } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="myNavbar" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <Link
              exact
              className="nav-item"
              activeClass="active"
              to="profile"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Profile
            </Link>
            <Link
              exact
              className="nav-item"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
            <Link
              exact
              className="nav-item"
              activeClass="active"
              to="abilities"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Abilities
            </Link>
            <Link
              exact
              className="nav-item"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="nav-item"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
