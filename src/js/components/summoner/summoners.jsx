import React from 'react';
// import utilAPI from '../util/util_sum';

class Summoners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      summonerList: [],
    };
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

export default Summoners;