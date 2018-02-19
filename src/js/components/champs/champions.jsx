import React from 'react';
import ChampDetail from './champion_detail';
import SearchInput, {createFilter} from 'react-search-input';

const KEYS_TO_FILTERS = ['name'];

class Champions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      champList: {},
      isLoading: true,
      searchTerm: ''
    };

    this.allChamps = [];
    this.fetchChampList = this.fetchChampList.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.selectChamps = this.selectChamps.bind(this);
  }

  componentWillMount(){
    setTimeout(()=>this.setState({isLoading: false}), 1400);
    this.fetchChampList();
  }

  searchUpdate(term) {
    this.setState({searchTerm: term});
  }

  fetchChampList(){
    let champs = {};
      $.getJSON("../../../data/champions.json", function (data) {
        $.each(data, function (index, value) {
            champs[index]=value;
          });
      }).then(champ => this.setState({champList : champ.data})).then(allChamp => this.selectChamps());
  }

  selectChamps(){
    this.allChamps = Object.keys(this.state.champList).map(el=> this.state.champList[el]);
  }

  render(){
    if(typeof this.state.champList !== 'undefined'){
      let filteredChamps = this.allChamps.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
      return(
        <div className="jumbotron mx-auto jumbo-about">
          <div className="items">
            {this.state.isLoading ? <div className="loading-icon"></div> :
              <div>
                <SearchInput className="search-input search" onChange={this.searchUpdate} />
                <div className="main-body">
                  {filteredChamps.map(champ => <ChampDetail key={champ.id} info={champ.info} name={champ.name}
                    image={champ.image} spells={champ.spells} stats={champ.stats} title={champ.title}
                    lore={champ.lore} passive={champ.passive} blurb={champ.blurb}/>)}
                </div>
              </div>
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
