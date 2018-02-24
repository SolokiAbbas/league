import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class BarSolo extends React.Component{
  render(){
    return(
      <div className="jumbotron text-center">
        <XYPlot
          width={500}
          height={300}>
          <HorizontalGridLines />
          <LineSeries
            data={[
              {x: this.props.x[0], y: this.props.y[0]},
              {x: this.props.x[1], y: this.props.y[1]},
              {x: this.props.x[2], y: this.props.y[2]},
              {x: this.props.x[3], y: this.props.y[3]},
              {x: this.props.x[4], y: this.props.y[4]},
              {x: this.props.x[5], y: this.props.y[5]},
              {x: this.props.x[6], y: this.props.y[6]},
              {x: this.props.x[7], y: this.props.y[7]},
              {x: this.props.x[8], y: this.props.y[8]},
              {x: this.props.x[9], y: this.props.y[9]}
            ]}/>
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default BarSolo;
