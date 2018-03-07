import React from 'react';
import Summoner from './summoner';

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

    this.api = process.env.MY_API_KEY;
    this.fetchChamp = this.fetchChamp.bind(this);
    this.fetchMastery = this.fetchMastery.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  fetchChamp(event){
    // get champ
    event.preventDefault();
    const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${this.state.search}?api_key=${this.api}`;
    fetch(url).then((res) => {
      if(res.status >= 200 && res.status <= 300){
        this.clearErrors();
        return res.json();
      }else{
        this.setState({errors: 'Could not find Summoner', found: false});
      }
    }).then(data => {
      if(this.state.errors.length < 1){
        this.setState({summonerInfo: data});}}
      ).then(()=> {
      if(this.state.errors.length < 1){
        this.fetchMastery();}});
  }

  fetchMastery(){
    //get mastery
    const urlMast = `https://na1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/${this.state.summonerInfo.id}?api_key=${this.api}`;
    fetch(urlMast).then((res) => res.json()).then(data =>this.setState({mastery: data})).then(()=>this.setState({found: true})).then(()=>this.clearErrors());
  }

  clearErrors(){
    this.setState({errors: ''});
  }

  render(){
    console.log(this.api);
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h5 className="text-center">Riot's API keys last for 24 hours. If search is not working, a new key is needed.</h5>
            <div className="summoner-center">
              <form className="searchform cf" onSubmit={this.fetchChamp}>
                <input type="text" placeholder="Search Summoners..." value={this.state.search} onChange={this.handleChange}/>
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="errors-center">
              {this.state.errors}
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
