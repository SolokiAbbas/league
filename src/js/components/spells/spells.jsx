import React from 'react';
import SpellDetail from './spell_detail';
// import utilAPI from '../util/util_spells';

class Spells extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spellsList: {},
      isLoading: true
    };
    this.data = {};
    this.fetchSpellsList = this.fetchSpellsList.bind(this);
  }

  componentWillMount(){
    setTimeout(()=>this.setState({isLoading: false}), 800);
    this.fetchSpellsList();
  }

  fetchSpellsList(){
    let spells = {};
      $.getJSON("../../../data/spells.json", function (data) {
        $.each(data, function (index, value) {
            spells[index]=value;
          });
      }).then(spell => this.setState({spellsList : spell.data}));
  }

  render(){
      if(typeof this.state.spellsList.SummonerBarrier !== 'undefined'){
        const allSpells = Object.keys(this.state.spellsList).map(el=> this.state.spellsList[el]);
        return(
          <div className="jumbotron mx-auto jumbo-about">
            <div className="items">
              {this.state.isLoading ? <div className="loading-icon"></div> :
              allSpells.map(spell => <SpellDetail key={spell.id} detail={spell.description}
                name={spell.name} image={spell.image}/>)
              }
            </div>
          </div>
        );
       }else{
       return(<div></div>);
      }
  }
}

export default Spells;
