import React from 'react';


class SpellDetail extends React.Component{
  render(){
    return(
        <div className="card item-details" style={{width: '18rem'}}>
          <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.image.full}`} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.detail}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
  }
}

export default SpellDetail;
