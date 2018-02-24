import React from 'react';
import BarSolo from './bar_solo';

class BarGraphs extends React.Component{
  constructor(){
    super();
    this.state = {
      bar1: {},
      bar2: {},
      bar3: {},
      bar4: {}
    };
    this.fetchBar1 = this.fetchBar1.bind(this);
    this.fetchBar2 = this.fetchBar2.bind(this);
    this.fetchBar3 = this.fetchBar3.bind(this);
    this.fetchBar4 = this.fetchBar4.bind(this);
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

  render(){
    if(typeof this.state.bar1[0] !== 'undefined'){
      return(
        <div>
          <BarSolo champ={this.state.bar1} />

        </div>
      );
    } else {
      return(<div>No Bar Graph</div>);
    }
  }
}

export default BarGraphs;
