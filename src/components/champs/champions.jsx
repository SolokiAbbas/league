import React from 'react';
import ChampDetail from './champion_detail';
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
      $.getJSON("../../data/champions.json", function (data) {
        $.each(data, function (index, value) {
            champs[index]=value;
          });
      }).then(champ => this.setState({champList : champ.data}));
  }

  render(){
    if(typeof this.state.champList !== 'undefined'){
      const allChamps = Object.keys(this.state.champList).map(el=> this.state.champList[el]);
      console.log(allChamps);
      return(
        <div className="jumbotron mx-auto jumbo-about">
          <div className="items">
            {allChamps.map(champ => <ChampDetail key={champ.id} info={champ.info} name={champ.name}
               image={champ.image} spells={champ.spells} stats={champ.stats} title={champ.title}/>)}
          </div>
        </div>
      );
     }else{
     return(<div>Champion Not Found</div>);
    }
    }
}

export default Champions;
