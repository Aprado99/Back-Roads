import React from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        {/* <ul className="" id="nav-links">
          {pageLinks.map((Link) => {
            return (
              <li key={Link.id}>
                <a href={Link.href} className="">
                  {Link.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <ul className="nav-icons">
          {socialLinks.map((Link) => {
            const { id, href, icon } = Link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
