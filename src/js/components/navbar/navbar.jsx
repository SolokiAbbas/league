import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './welcome';

class NavBar extends React.Component {

      render(){
        if(typeof this.props.location === "object"){
        return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">
            <Link className="navbar-brand nav-home-title" to="/"><img className="nav-home" src="../../../assets/images/w-icon.png" />League Watcher</Link>
            <div className="nav-others">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <Link className={this.props.location.pathname === "/about" ? "navbar-brand nav-size glow" : "navbar-brand nav-size"} to="/about">About</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className={this.props.location.pathname === "/stats" ? "navbar-brand nav-size glow" : "navbar-brand nav-size"} to="/stats">Stats</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className={this.props.location.pathname === "/summoners" ? "navbar-brand nav-size glow" : "navbar-brand nav-size"} to="/summoners">Summoners</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className={this.props.location.pathname === "/champions" ? "navbar-brand nav-size glow" : "navbar-brand nav-size"} to="/champions">Champions</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className={this.props.location.pathname === "/spells" ? "navbar-brand nav-size glow" : "navbar-brand nav-size"} to="/spells">Spells</Link>

              <img className="nav-images" src="../../../assets/images/rune.png" />
              <Link className={this.props.location.pathname === "/items" ? "navbar-brand nav-size glow" : "navbar-brand nav-size"} to="/items">Items</Link>
            </div>
          </div>

        </nav>
      </div>
    );
  }else{
    return(<div></div>);
  }
  }
}
export default NavBar;
