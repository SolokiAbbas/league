import React from 'react';
import fetchItems from '../util/util_items';

class Items extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemList: [],
    };
    this.fetchItems = this.fetchItems.bind(this);
  }
  fetchItems(){
    const url ="https://na1.api.riotgames.com/lol/static-data/v3/items?locale=en_US&api_key=RGAPI-149ba0a2-62de-46e0-8c23-9ae7f2930aa1";
    fetchItems().then(data=>{
      this.setState({data});
    });
  }

  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            {this.fetchItems()}
            {console.log(this.state)}
            <p>{this.state.itemList}</p>
          </div>
        );
  }
}

export default Items;
