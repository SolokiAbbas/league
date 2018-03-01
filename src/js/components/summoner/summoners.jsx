import React from 'react';
// import utilAPI from '../util/util_sum';

class Summoners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      summonerList: [],
    };
  }
  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h3 className="text-center">Under Construction!</h3>
            <h5 className="text-center">Riot's API keys last for 24 hours. If search is not working, it means I need a new key.</h5>
          </div>
        );
  }
}

export default Summoners;
