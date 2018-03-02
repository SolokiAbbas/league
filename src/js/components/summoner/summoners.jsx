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
    const url = "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/hayasama?api_key=RGAPI-0b8d853c-dc2a-4eec-9051-2abdc7e452db";
    fetchSumAPI(url).then(data => this.setState({summonerInfo: data}));
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
