import React from 'react';
import Summoner from './summoner';
import fetchSumAPI from '../util/util_sum';

class Summoners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      summonerInfo: [],
    };
  }

  componentWillMount(){
    const url = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/hayasama?api_key=RGAPI-0598451f-57b5-402f-a3fc-7f408ffe13b4";
    fetchSumAPI(url).then(data => this.setState({summonerInfo: data}));
  }

  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h3 className="text-center">Under Construction!</h3>
            <h5 className="text-center">Riot's API keys last for 24 hours. If search is not working, it means a new key is needed.</h5>
          </div>
        );
  }
}

export default Summoners;
