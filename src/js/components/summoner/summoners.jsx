import React from 'react';
import Summoner from './summoner';
import { fetchSumAPI, fetchMasteryAPI } from '../util/util_sum';

class Summoners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: "",
      found: false,
      summonerInfo: [],
      mastery: 0,
      errors: '',
      tester: [{name: "Hayasama (Default)", level: 500, mastery: 3000, profileicon:539}]
    };
    this.fetchChamp = this.fetchChamp.bind(this);
    this.fetchMastery = this.fetchMastery.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  fetchChamp(event){
    // get champ
    event.preventDefault();
    const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${this.state.search}?api_key=RGAPI-d590429d-1a69-4afc-8761-b9dfd9c162cb`;
    fetch(url).then((res) => res.json()).catch(err=> this.setState({errors: 'Could not Find Summoner'})).then(data => this.setState({summonerInfo: data})).then(()=> this.fetchMastery());
  }

  fetchMastery(){
    //get mastery
    const urlMast = `https://na1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/${this.state.summonerInfo.id}?api_key=RGAPI-d590429d-1a69-4afc-8761-b9dfd9c162cb`;
    fetch(urlMast).then((res) => res.json()).then(data =>this.setState({mastery: data})).then(()=>this.setState({found: true}));

  }

  render(){
    console.log(this.state);
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h3 className="text-center">Under Construction!</h3>
            <h5 className="text-center">Riot's API keys last for 24 hours. If search is not working, it means a new key is needed.</h5>
            <div className="summoner-center">
              <form className="searchform cf" onSubmit={this.fetchChamp}>
                <input type="text" placeholder="Search Summoners..." value={this.state.search} onChange={this.handleChange}/>
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="summoner-center">
              {this.state.found ? <Summoner profileicon={this.state.summonerInfo.profileIconId}
                              name={this.state.summonerInfo.name}
                              level={this.state.summonerInfo.summonerLevel}
                              mastery={this.state.mastery}/> :
              <Summoner profileicon={this.state.tester[0].profileicon}
                name={this.state.tester[0].name}
                level={this.state.tester[0].level}
                mastery={this.state.tester[0].mastery}/>
            }
            </div>
          </div>
        );
  }
}

export default Summoners;
