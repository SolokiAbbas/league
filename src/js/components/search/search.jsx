import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';

class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: ''
    };
    this.searchUpdate = this.searchUpdate.bind(this);
  }
}

export default Search;
