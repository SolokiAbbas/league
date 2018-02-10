import React from 'react';
import SpellDetail from './spell_detail';
// import utilAPI from '../util/util_spells';

class Spells extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spellsList: {},
    };
    this.data = {};
    this.fetchSpellsList = this.fetchSpellsList.bind(this);
  }

  componentWillMount(){
    this.fetchSpellsList();
  }

  fetchSpellsList(){
    let spells = {};
      $.getJSON("../../data/spells.json", function (data) {
        $.each(data, function (index, value) {
            spells[index]=value;
          });
      }).then(spell => this.setState({spellsList : spell.data}));
  }

  render(){
    return(
          <div className="jumbotron mx-auto jumbo-about">
            <p>I am experienced in Ruby on Rails and JavaScript.
              Currently, I am working on a solo Project using Python and Django.
              Solving difficult algorithms is my hobby.
              I look forward to experience new technologies and challenges.
            </p>
          </div>
        );
  }
}

export default Spells;
