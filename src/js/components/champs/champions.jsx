import React from 'react';
import ChampDetail from './champion_detail';

class Champions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      champList: {},
      isLoading: true
    };
    
    this.data = {};
    this.fetchChampList = this.fetchChampList.bind(this);
  }

  componentWillMount(){
    setTimeout(()=>this.setState({isLoading: false}), 1400);
    this.fetchChampList();

  }

  fetchChampList(){
    let champs = {};
      $.getJSON("../../../data/champions.json", function (data) {
        $.each(data, function (index, value) {
            champs[index]=value;
          });
      }).then(champ => this.setState({champList : champ.data}));
  }

  render(){
    if(typeof this.state.champList !== 'undefined'){
      const allChamps = Object.keys(this.state.champList).map(el=> this.state.champList[el]);

      return(
        <div className="jumbotron mx-auto jumbo-about">
          <div className="items">
            {this.state.isLoading ? <div className="loading-icon"></div> :
            allChamps.map(champ => <ChampDetail key={champ.id} info={champ.info} name={champ.name}
               image={champ.image} spells={champ.spells} stats={champ.stats} title={champ.title}
               lore={champ.lore} passive={champ.passive} blurb={champ.blurb}/>)
             }
          </div>
        </div>
      );
     }else{
     return(<div></div>);
    }
    }
}

export default Champions;
