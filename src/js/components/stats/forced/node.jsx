import React from 'react';
import d3 from 'd3';

let color = d3.scale.category20();

class Node extends React.Component{
  render(){
    return(
        <circle
          r={5}
          cx={this.props.x}
          cy={this.props.y}
          style={{
            "fill": color(this.props.group),
            "stroke":"#fff",
            "strokeWidth":"1.5px"
          }}/>
      );
  }
}

export default Node;
