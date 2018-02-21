import React from 'react';
import NavBar from './navbar/navbar';
import About from './navbar/about';
import Welcome from './navbar/welcome';
import Champions from './champs/champions';
import Items from './items/items';
import Spells from './spells/spells';
import Stats from './stats/stats';
import Summoners from './summoner/summoners';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <Route exact path="/" component={ Welcome } />
        <Route path="/about" component={ About } />
        <Route path="/champions" component={ Champions } />
        <Route path="/stats" component={ Stats } />
        <Route path="/items" component={ Items } />
        <Route path="/spells" component={ Spells } />
        <Route path="/summoners" component={ Summoners } />
      </div>
    );
  }
}

export default App;
