import React from 'react';
import Forced from './forced/forced_graph';
import { Link } from 'react-router-dom';

class Stats extends React.Component{

  render(){
    return(
      <div>
        <nav className="navbar navbar-light bg-light custom-graphs">
          <div id="menu">
            <ul>
              <li><Link className={this.props.location.pathname === "/stats/forced" ? "active navbar-brand" : "navbar-brand"} to="/stats/forced">Forced Graph</Link></li>

              <li><Link className={this.props.location.pathname === "/stats/bar" ? "active navbar-brand" : "navbar-brand"} to="/stats/bar">Bar Graphs</Link></li>

              <li><Link className={this.props.location.pathname === "/stats/fun" ? "active navbar-brand" : "navbar-brand"} to="/stats/fun">Fun Visuals</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Stats;
