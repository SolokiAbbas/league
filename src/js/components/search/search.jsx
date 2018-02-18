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
    const filteredChamps = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div className="jumbotron mx-auto jumbo-about">
        <SearchInput className="search-input" onChange={this.searchUpdated} />

      </div>
    );
  }

}

export default Search;
