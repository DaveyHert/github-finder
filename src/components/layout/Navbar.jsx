import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => (
  <nav className='navbar bg-primary'>
    <h1>
      <Link to='/'>
        <i className={icon}></i> {title}
      </Link>
    </h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

export default Navbar;
