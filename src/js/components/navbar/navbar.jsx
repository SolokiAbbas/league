import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="navbar-brand" to="/about">About</Link>
          <Link className="navbar-brand" to="/stats">Stats</Link>
          <Link className="navbar-brand" to="/summoners">Summoners</Link>
          <Link className="navbar-brand" to="/champions">Champions</Link>
          <Link className="navbar-brand" to="/spells">Summoner Spells</Link>
          <Link className="navbar-brand" to="/items">Summoner Items</Link>
        </nav>
      </div>
    );

export default NavBar;
