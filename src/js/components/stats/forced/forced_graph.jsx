import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


class Forced extends React.Component{
  constructor(){
    super();
    this.state = {
      graph: {}
    };
    this.allNodes = [];
    this.allQueues = [];
    this.fetchForced = this.fetchForced.bind(this);
    this.selectNodes = this.selectNodes.bind(this);
    this.selectQueues = this.selectQueues.bind(this);
  }

  componentWillMount(){
    this.fetchForced();
  }

  fetchForced(){
    let fgraph = {};
      $.getJSON("../../../../data/forced.json", function (data) {
        $.each(data, function (index, value) {
            fgraph[index]=value;
          });
      }).then(datas => this.setState({graph : datas})).then(()=>this.selectNodes()).then(()=>this.selectQueues());
  }

  selectNodes(){
    this.allNodes = this.state.graph.nodes;
  }

  selectQueues(){
    this.allQueues = this.state.graph.queues;
  }

 render() {
   if(typeof this.state.graph.nodes !== 'undefined'){
     return (
       <div className="forced-graph">
         <h2 className="text-center forced-value">~ League top 10 in Challengers and Masters ~</h2>
         <InteractiveForceGraph className="jumbotron mx-auto d-block border"
          simulationOptions={{ height: 600, width: 500, animate: true, strength: 1, radiusMargin: 20 }}
           labelAttr="label"
           highlightDependencies>
           <ForceGraphNode node={{ id: 'first-node', label: this.state.graph.nodes[0].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'second-node', label: this.state.graph.nodes[1].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'third-node', label: this.state.graph.nodes[2].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'fourth-node', label: this.state.graph.nodes[3].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'fifth-node', label: this.state.graph.nodes[4].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'sixth-node', label: this.state.graph.nodes[5].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'seventh-node', label: this.state.graph.nodes[6].name, radius: 10 }} fill="red" />
           <ForceGraphNode node={{ id: 'challenger-node', label: "Challenger League", radius: 20 }} fill="gold" />
           <ForceGraphNode node={{ id: 'master-node', label: "Master League", radius: 20 }} fill="silver" />
           <ForceGraphNode node={{ id: 'eighth-node', label: this.state.graph.nodes[7].name, radius: 10 }} fill="blue" />
           <ForceGraphNode node={{ id: 'nineth-node', label: this.state.graph.nodes[8].name, radius: 10 }} fill="blue" />
           <ForceGraphNode node={{ id: 'tenth-node', label: this.state.graph.nodes[9].name, radius: 10 }} fill="blue" />
           <ForceGraphNode node={{ id: 'eleventh-node', label: this.state.graph.nodes[10].name, radius: 10 }} fill="blue" />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'first-node' }} />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'second-node' }} />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'third-node' }} />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'fourth-node' }} />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'fifth-node' }} />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'sixth-node' }} />
           <ForceGraphLink link={{ source: 'challenger-node', target: 'seventh-node' }} />
           <ForceGraphLink link={{ source: 'master-node', target: 'eighth-node' }} />
           <ForceGraphLink link={{ source: 'master-node', target: 'nineth-node' }} />
           <ForceGraphLink link={{ source: 'master-node', target: 'tenth-node' }} />
           <ForceGraphLink link={{ source: 'master-node', target: 'eleventh-node' }} />

        </InteractiveForceGraph>
      </div>
     );
   } else{
     return(<div></div>);
   }
 }

}

export default Forced;
