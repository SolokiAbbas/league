import React from 'react';
import Forced from './forced/forced_graph';

class Stats extends React.Component{
  constructor(){
    super();
    this.state = {
      graph: {}
    };
    this.nodes = [];
    this.queues = [];
    this.allNodes = this.allNodes.bind(this);
    this.allQueues = this.allQueues.bind(this);
    this.fetchForced = this.fetchForced.bind(this);
  }

  componentWillMount(){
    this.fetchForced();
  }

  fetchForced(){
    let fgraph = {};
      $.getJSON("../../../data/forced.json", function (data) {
        $.each(data, function (index, value) {
            fgraph[index]=value;
          });
      }).then(datas => this.setState({graph : datas}));
  }

  allNodes(){
    this.nodes = Object.keys(this.state.data).map(el=> this.state.data[el]);
  }

  allQueues(){
    this.queues = Object.keys(this.state.data).map(el=> this.state.data[el]);
  }

  render(){
    return(
      <div>
        <Forced></Forced>
      </div>
    );
  }
}

export default Stats;
