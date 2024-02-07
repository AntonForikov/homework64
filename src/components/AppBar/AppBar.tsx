import React from 'react';
import {NavLink} from 'react-router-dom';

const AppBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-3">
      <div className="container-md">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
      </div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;