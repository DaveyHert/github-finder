import React from "react";

const Navbar = ({ icon, title }) => (
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon}></i> {title}
    </h1>
  </nav>
);

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

export default Navbar;
