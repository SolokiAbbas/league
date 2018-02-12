import React from 'react';


class ItemDetail extends React.Component{

  render(){
    return(
      <div>
        <h1>Hello</h1>
        <h3>{this.props.name}</h3>
        <h3>{this.props.detail}</h3>
      </div>
    );
  }
}

export default ItemDetail;
