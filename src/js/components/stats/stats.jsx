import React from 'react';
import Forced from './forced/forced_graph';
import { Link } from 'react-router-dom';

class Stats extends React.Component{

  render(){
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand mb-0 h1" to="/stats/forced">League Challenger and Masters</Link>
          <Link className="navbar-brand mb-0 h1" to="/stats/bar">League Champion Stats</Link>
          <Link className="navbar-brand mb-0 h1" to="/stats/fun">Fun Graphs</Link>
        </nav>
      </div>
    );
  }
}

export default Stats;
