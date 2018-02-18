import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './welcome';

const NavBar = () => (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">

            <Link className="navbar-brand nav-size" to="/">Home</Link>

            <Link className="navbar-brand nav-size" to="/about">About</Link>

            <Link className="navbar-brand nav-size" to="/">Stats</Link>

            <Link className="navbar-brand nav-size" to="/summoners">Summoners</Link>

            <Link className="navbar-brand nav-size" to="/champions">Champions</Link>

            <Link className="navbar-brand nav-size" to="/spells">Spells</Link>

            <Link className="navbar-brand nav-size" to="/items">Items</Link>

        </nav>

      </div>
    );

export default NavBar;
