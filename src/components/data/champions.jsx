import React from 'react';
import utilAPI from '../util/util_champ';

class Champions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      championList: [],
    };
  }
  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h3>Champions</h3>
          </div>
        );
  }
}

export default Champions;