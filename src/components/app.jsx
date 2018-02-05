import React from 'react';
import NavBar from './navbar/navbar';
import About from './navbar/about';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <Route path="/" component={ NavBar } />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
