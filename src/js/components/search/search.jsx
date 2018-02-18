import React from 'react';
import fetchChampList from '../champs/champions';
import SearchInput, {createFilter} from 'react-search-input';

const KEYS_TO_FILTERS = ['user.name'];

class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      champList: {}
    };
    this.searchUpdate = this.searchUpdate.bind(this);
  }

  searchUpdate(term) {
    this.setState({searchTerm: term});
  }

  render(){
    const allChamps = Object.keys(this.state.champList).map(el=> this.state.champList[el]);
    const filteredChamps = allChamps.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div className="jumbotron mx-auto jumbo-about">
        <SearchInput className="search-input" onChange={this.searchUpdated} />
          {filteredChamps.map(champ => {
          return (
            <div className="mail" key={champ.id}>
              <div className="from">{champ.name}</div>
              <div className="subject">{champ.title}</div>
            </div>
          );
        })}
      </div>
    );
  }

}

export default Search;
