import React from 'react';
import ItemDetail from './item_detail';
import SearchInput, {createFilter} from 'react-search-input';

const KEYS_TO_FILTERS = ['name'];

class Items extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemsList: {},
      isLoading: true,
      searchTerm: ''
    };

    this.allItems = [];
    this.fetchItemsList = this.fetchItemsList.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.selectItems = this.selectItems.bind(this);
  }

  componentWillMount(){
    setTimeout(()=>this.setState({isLoading: false}), 800);
    this.fetchItemsList();
  }

  searchUpdate(term) {
    this.setState({searchTerm: term});
  }

  fetchItemsList(){
    // const url ="https://na1.api.riotgames.com/lol/static-data/v3/items?locale=en_US&api_key=RGAPI-149ba0a2-62de-46e0-8c23-9ae7f2930aa1";
    // fetchItems().then(data=>{
    //   this.setState({data});
    // });
    let items = {};
      $.getJSON("../../../data/items.json", function (data) {
        $.each(data, function (index, value) {
            items[index]=value;
          });
      }).then(item => this.setState({itemsList : item.data})).then(allItems => this.selectItems());
  }

  selectItems(){
    this.allItems = Object.keys(this.state.itemsList).map(el=> this.state.itemsList[el]);
  }

  render(){

    if(typeof this.state.itemsList[1001] !== 'undefined'){
      let filteredItems = this.allItems.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
      return(
        <div className="jumbotron mx-auto jumbo-about">
          <div className="items">
            {this.state.isLoading ? <div className="loading-icon"></div> :
              <div>
                <div className="searching">
                  <img className="nav-search" src="../../../assets/images/search.png" />
                  <h4 className="forced-value" style={{margin: "0 10px 0 0"}}> Search</h4>
                  <SearchInput className="search-input search" onChange={this.searchUpdate} placeholder="Search Items"/>
                </div>
                <div className="main-body">
                    {filteredItems.map(item => <ItemDetail key={item.id} detail={item.plaintext} name={item.name}
                      gold={item.gold} image={item.image}/>)}
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

export default Items;
