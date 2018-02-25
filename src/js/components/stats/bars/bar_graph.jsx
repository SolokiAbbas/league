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
      showBar: "bar1"
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

  whichBar(val){
    this.setState({showBar: val});
  }

  render(){
    if(typeof this.state.bar1[0] !== 'undefined'){
      return(
        <div>
            <label className="radio-inline">
              <input type="radio" name="radioGroup" id="radio1" value="bar1" onChange={()=>this.whichBar("bar1")} /> Chamption Win Rate in Challenger League
            </label>
            <label className="radio-inline">
              <input type="radio" name="radioGroup" id="radio2" value="bar2" onChange={()=>this.whichBar("bar2")} /> Chamption Win Rate in Master League
            </label>
            <label className="radio-inline">
              <input type="radio" name="radioGroup" id="radio3" value="bar3" onChange={()=>this.whichBar("bar3")} /> Chamption Win Rate in All Leagues
            </label>
            <label className="radio-inline">
              <input type="radio" name="radioGroup" id="radio4" value="bar4" onChange={()=>this.whichBar("bar4")} /> Most picked Champions in All Leagues
            </label>
            {this.state.showBar === "bar1" ? <BarSolo champ={this.state.bar1} /> :
          this.state.showBar === "bar2" ? <BarSolo champ={this.state.bar2} /> :
        this.state.showBar === "bar3" ? <BarSolo champ={this.state.bar3} /> :
      this.state.showBar === "bar4" ? <BarSolo champ={this.state.bar4} /> : <div></div>}

        </div>
      );
    } else {
      return(<div>No Bar Graph</div>);
    }
  }
}

export default BarGraphs;
