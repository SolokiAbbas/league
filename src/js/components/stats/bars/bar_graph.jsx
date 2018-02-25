import React from 'react';
import BarSolo from './bar_solo';

class BarGraphs extends React.Component{
  constructor(){
    super();
    this.state = {
      bar1: {},
      bar2: {},
      bar3: {},
      bar4: {},
      showBar: "bar1",
      range: [60,80],
      name: "Champions Win Rate in Challenger"
    };
    this.fetchBar1 = this.fetchBar1.bind(this);
    this.fetchBar2 = this.fetchBar2.bind(this);
    this.fetchBar3 = this.fetchBar3.bind(this);
    this.fetchBar4 = this.fetchBar4.bind(this);
    this.whichBar = this.whichBar.bind(this);
  }

  componentWillMount(){
    this.fetchBar1();
  }

  fetchBar1(){
    let bars = {};
      $.getJSON("../../../../data/bar1.json", function (data) {
        $.each(data, function (index, value) {
            bars[index]=value;
          });
      }).then(datas => this.setState({bar1 : datas})).then(()=>this.fetchBar2()).then(()=>this.fetchBar3()).then(()=>this.fetchBar4());
  }

  fetchBar2(){
    let bars = {};
      $.getJSON("../../../../data/bar2.json", function (data) {
        $.each(data, function (index, value) {
            bars[index]=value;
          });
      }).then(datas => this.setState({bar2 : datas}));
  }

  fetchBar3(){
    let bars = {};
      $.getJSON("../../../../data/bar3.json", function (data) {
        $.each(data, function (index, value) {
            bars[index]=value;
          });
      }).then(datas => this.setState({bar3 : datas}));
  }

  fetchBar4(){
    let bars = {};
      $.getJSON("../../../../data/bar4.json", function (data) {
        $.each(data, function (index, value) {
            bars[index]=value;
          });
      }).then(datas => this.setState({bar4 : datas}));
  }

  whichBar(val, arr, title){
    this.setState({showBar: val,
                  range: arr, name: title});
  }

  render(){
    if(typeof this.state.bar1[0] !== 'undefined'){
      return(
        <div>
          <div className="text-center">
            <label className="radio-inline radio-solo">
              <input type="radio" defaultChecked={true} name="radioGroup" id="radio1" value="bar1" onChange={()=>this.whichBar("bar1",[60,80], "Champions Win Rate in Challenger")} /> Chamption Win Rate in Challenger League
            </label>
            <label className="radio-inline radio-solo">
              <input type="radio" name="radioGroup" id="radio2" value="bar2" onChange={()=>this.whichBar("bar2", [55,80], "Champions Win Rate in Master")} /> Chamption Win Rate in Master League
            </label>
            <label className="radio-inline radio-solo">
              <input type="radio" name="radioGroup" id="radio3" value="bar3" onChange={()=>this.whichBar("bar3", [52,54], "Champions Win Rate Overall")} /> Chamption Win Rate in All Leagues
            </label>
            <label className="radio-inline radio-solo">
              <input type="radio" name="radioGroup" id="radio4" value="bar4" onChange={()=>this.whichBar("bar4", [15.9,30.1], "Most Picked Champions")} /> Most picked Champions in All Leagues
            </label>
          </div>
            {this.state.showBar === "bar1" ? <BarSolo champ={this.state.bar1} range={this.state.range} title={this.state.name} /> :
          this.state.showBar === "bar2" ? <BarSolo champ={this.state.bar2} range={this.state.range} title={this.state.name} /> :
        this.state.showBar === "bar3" ? <BarSolo champ={this.state.bar3} range={this.state.range} title={this.state.name} /> :
      this.state.showBar === "bar4" ? <BarSolo champ={this.state.bar4} range={this.state.range} title={this.state.name} /> : <div></div>}

        </div>
      );
    } else {
      return(<div>No Bar Graph</div>);
    }
  }
}

export default BarGraphs;
