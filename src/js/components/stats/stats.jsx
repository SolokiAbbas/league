import React from 'react';
import Forced from './forced/forced_graph';
import { Link } from 'react-router-dom';

class Stats extends React.Component{

  render(){
    return(
      <div>
        <nav className="navbar navbar-light bg-light custom-graphs">
          <Link className="navbar-brand" to="/stats/forced">Forced Graph</Link>
          <Link className="navbar-brand" to="/stats/bar">Bar Graphs</Link>
          <Link className="navbar-brand" to="/stats/fun">Fun Visuals</Link>
        </nav>
      </div>
    );
  }
}

export default Stats;
