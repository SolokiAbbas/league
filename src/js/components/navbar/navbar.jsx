import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './welcome';

const NavBar = () => (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">
            <Link className="navbar-brand nav-home-title" to="/"><img className="nav-home" src="../../../assets/images/w-icon.png" />League Watcher</Link>
            <div className="nav-others">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <Link className="navbar-brand nav-size" to="/about">About</Link>
              
              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className="navbar-brand nav-size" to="/stats">Stats</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className="navbar-brand nav-size" to="/summoners">Summoners</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className="navbar-brand nav-size" to="/champions">Champions</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className="navbar-brand nav-size" to="/spells">Spells</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className="navbar-brand nav-size" to="/items">Items</Link>
            </div>
          </div>

        </nav>
      </div>
    );

export default NavBar;
