import React from 'react';


class ChampDetail extends React.Component{
  render(){
    let title = this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1);
    return(
        <div className="card item-details" style={{width: '16rem'}}>
          <img className="card-img-top" style={{padding: '50px'}} src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/champion/${this.props.image.full}`} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">"{title}"</p>
            <p className="card-text">{this.props.blurb}</p>
            <a href="#" className="btn btn-primary">Details!</a>
          </div>
        </div>
    );
  }
}

export default ChampDetail;
