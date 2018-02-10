import React from 'react';
// import fetchItems from '../util/util_items';

class Items extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemsList: {},
    };
    this.data = {};
    this.fetchItemsList = this.fetchItemsList.bind(this);
  }
  componentDidMount(){
    this.fetchItemsList();
  }

  fetchItemsList(){
    // const url ="https://na1.api.riotgames.com/lol/static-data/v3/items?locale=en_US&api_key=RGAPI-149ba0a2-62de-46e0-8c23-9ae7f2930aa1";
    // fetchItems().then(data=>{
    //   this.setState({data});
    // });
    // data=> this.setState({datas: data})
    let items = {};
    $.getJSON("../../data/items.json", function (data) {
      $.each(data, function (index, value) {
          items[index]=value;
        });
        // console.log(items.data);
    });
    this.setState({itemsList : items.data});
    console.log(items.data);
  }

  render(){
    if(typeof this.state !== 'undefined'){
      return(
        <div className="jumbotron mx-auto jumbo-about">

          // {console.log(this.state.itemsList)}
          <p></p>
        </div>
      );
     }else{
     return(<div></div>);
    }
   }
}

export default Items;
