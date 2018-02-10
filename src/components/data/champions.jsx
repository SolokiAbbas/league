import React from 'react';
// import utilAPI from '../util/util_champ';

class Champions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      champList: {},
    };
    this.data = {};
    this.fetchChampList = this.fetchChampList.bind(this);
  }

  componentWillMount(){
    this.fetchChampList();
  }
  
  fetchChampList(){
    let champs = {};
      $.getJSON("../../data/items.json", function (data) {
        $.each(data, function (index, value) {
            champs[index]=value;
          });
      }).then(champ => this.setState({champList : champ.data}));
  }

  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <h3>Champions</h3>
          </div>
        );
  }
}

export default Champions;
