import React from 'react';

class Summoner extends React.Component{
  render(){
    return(
      <div>
        <img src={`http://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/${this.props.profileicon}`} />
        <div>{this.props.name}</div>
        <div>{this.props.level}</div>
        <div>{this.props.mastery}</div>

      </div>
    );
  }
}

export default Summoner;
