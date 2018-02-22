import React from 'react';
import d3 from 'd3';

let color = d3.scale.category20();

class Link extends React.Component{
  render(){
    return (
        <line
          x1={this.props.datum.source.x}
          y1={this.props.datum.source.y}
          x2={this.props.datum.target.x}
          y2={this.props.datum.target.y}
          style={{
            "stroke":"#999",
            "strokeOpacity":".6",
            "strokeWidth": Math.sqrt(this.props.datum.value)
          }}/>
      );
  }
}

export default Link;
