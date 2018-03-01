import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';


class BarSolo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      champ: "All",
      value: 0
    };
    this.maxValue = this.maxValue.bind(this);
  }
  maxValue(name, val){
    this.setState({champ: name, value: val});
  }

  render(){
    return(
      <div className="jumbotron text-center">
        <h2 className="bar-value1">{this.props.title}</h2>
        <h2 className="bar-value">{this.state.champ} is {this.state.value}%</h2>
        <XYPlot
          xType="ordinal"
          width={600}
          height={300}
          xDistance={150}
          animation={true}
          yDomain={this.props.range}
          stackBy="y">
          <XAxis />
          <YAxis />
          <HorizontalGridLines />
          <VerticalBarSeries

            onValueMouseOver={(datapoint, event)=>{
              this.maxValue(datapoint.x, datapoint.y);
            }}
            color="blue"
              className="vertical-bar-series-example"
              data={[
                {x: this.props.champ[0].Champion, y: this.props.champ[0]["Win Rate"]},
                {x: this.props.champ[1].Champion, y: this.props.champ[1]["Win Rate"]},
                {x: this.props.champ[2].Champion, y: this.props.champ[2]["Win Rate"]},
                {x: this.props.champ[3].Champion, y: this.props.champ[3]["Win Rate"]},
                {x: this.props.champ[4].Champion, y: this.props.champ[4]["Win Rate"]},
                {x: this.props.champ[5].Champion, y: this.props.champ[5]["Win Rate"]},
                {x: this.props.champ[6].Champion, y: this.props.champ[6]["Win Rate"]},
                {x: this.props.champ[7].Champion, y: this.props.champ[7]["Win Rate"]},
                {x: this.props.champ[8].Champion, y: this.props.champ[8]["Win Rate"]},
                {x: this.props.champ[9].Champion, y: this.props.champ[9]["Win Rate"]},
              ]}/>
        </XYPlot>
      </div>
    );
  }
}

export default BarSolo;
