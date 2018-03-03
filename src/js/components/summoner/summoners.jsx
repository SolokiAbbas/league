import React from 'react';
import Summoner from './summoner';
import fetchSumAPI from '../util/util_sum';

class Summoners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      summonerInfo: [{name: "Hayasama", level: 50, mastery: 300, profileicon:539},
      {name: "Jooe", level:34, mastery:200, profileicon:539}],
    };
    this.fetchChamp = this.fetchChamp.bind(this);
  }

  componentWillMount(){
    // const url = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/hayasama?api_key=RGAPI-0598451f-57b5-402f-a3fc-7f408ffe13b4";
    // fetchSumAPI(url).then(data => this.setState({summonerInfo: data}));
  }

  fetchChamp(){
    // get champ
  }

  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h3 className="text-center">Under Construction!</h3>
            <h5 className="text-center">Riot's API keys last for 24 hours. If search is not working, it means a new key is needed.</h5>
            <form onSubmit={this.fetchChamp()}>
              <input type="text" placeholder="Search..."/>
              <button type="submit">Search</button>
            </form>
            <Summoner profileicon={this.state.summonerInfo[0].profileicon}
              name={this.state.summonerInfo[0].name}
              level={this.state.summonerInfo[0].level}
              mastery={this.state.summonerInfo[0].mastery}/>
          </div>
        );
  }
}

export default Summoners;
