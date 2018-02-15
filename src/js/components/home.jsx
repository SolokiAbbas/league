import React from 'react';
import App from './app';
import { HashRouter } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return(
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}

export default Home;
