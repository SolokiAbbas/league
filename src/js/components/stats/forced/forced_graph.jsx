import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


class Forced extends React.Component{
  constructor(){
    super();
    this.state = {
      graph: {}
    };
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



 render() {

   if(typeof this.state.graph.nodes !== 'undefined'){
     return (
       <InteractiveForceGraph className="jumbotron text-center"
         simulationOptions={{ height: 300, width: 300, animate: true }}
         labelAttr="label"
         onSelectNode={(node) => console.log(node)}
         highlightDependencies>
         <ForceGraphNode node={{ id: 'first-node', label: this.nodes[0].name }} fill="red" />
         <ForceGraphNode node={{ id: 'second-node', label: this.nodes[1].name }} fill="blue" />
         <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
       </InteractiveForceGraph>
     );
   } else{
     return(<div></div>);
   }
 }

}

export default Forced;
