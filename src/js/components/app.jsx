import React from 'react';
import NavBar from './navbar/navbar';
import About from './navbar/about';
import Champions from './champs/champions';
import Items from './items/items';
import Spells from './spells/spells';
import Summoners from './summoner/summoners';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <Route path="/" component={ NavBar } />
        <Route path="/about" component={ About } />
        <Route path="/champions" component={ Champions } />
        <Route path="/items" component={ Items } />
        <Route path="/spells" component={ Spells } />
        <Route path="/summoners" component={ Summoners } />
      </div>
    );
  }
}

export default App;
