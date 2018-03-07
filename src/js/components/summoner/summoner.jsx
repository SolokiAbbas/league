import React from 'react';

class Summoner extends React.Component{
  render(){
    return(
      <div className="card item-details text-center" style={{width: '15rem'}}>
        <div className="sum-image">
          <img className="card-image-top" style={{width: '100%'}} src={`http://ddragon.leagueoflegends.com/cdn/${this.props.version}/img/profileicon/${this.props.profileicon}.png`} />
        </div>
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
