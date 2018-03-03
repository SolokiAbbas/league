import React from 'react';

class Summoner extends React.Component{
  render(){
    return(
      <div className="card item-details" style={{width: '15rem'}}>
        <img src={`http://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/${this.props.profileicon}.png`} />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">Level: {this.props.level}</p>
          <p className="card-text">Mastery Score: {this.props.mastery}</p>
        </div>
      </div>
    );
  }
}

export default Summoner;
