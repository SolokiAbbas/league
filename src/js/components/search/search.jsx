import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';

class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      champList: {}
    };
    this.searchUpdate = this.searchUpdate.bind(this);
  }

  render(){
    return (
      <div>
      </div>
    );
  }

}

export default Search;
