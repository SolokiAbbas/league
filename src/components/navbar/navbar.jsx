import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="navbar-brand" to="/about">About</Link>
          <Link className="navbar-brand" to="/about">Champions</Link>
          <Link className="navbar-brand" to="/about">Search Summoner Name</Link>
          <Link className="navbar-brand" to="/about">Summoner Spells</Link>
          <Link className="navbar-brand" to="/about">Summoner Items</Link>
        </nav>
      </div>
    );

export default NavBar;
