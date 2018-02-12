import React from 'react';


class ItemDetail extends React.Component{
  render(){
    return(
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="../../assets/images/default-image.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.detail}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
