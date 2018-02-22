import React from 'react';
import Forced from './forced/forced_graph';

class Stats extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Forced></Forced>
      </div>
    );
  }
}

export default Stats;
