import React from 'react';


class ItemDetail extends React.Component{
  render(){
    return(
        <div className="card item-details" style={{width: '12rem'}}>
          <img className="card-img-top" style={{padding: '50px'}} src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/item/${this.props.image.full}`} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text font-italic">Cost: {this.props.gold.base}</p>
            <p className="card-text font-italic">Sells for: {this.props.gold.sell}</p>
            <p className="card-text">{this.props.detail}</p>
          </div>
        </div>
    );
  }
}

export default ItemDetail;
