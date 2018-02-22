import React from 'react';
import * as d3 from 'd3';

class Forced extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

 render() {
   return (
     <div className='jumobotron'>
       <h1>National Contiguity</h1>
       <div className='chartContainer'>
         <svg className='chart'>
         </svg>
       </div>
     </div>
   );
 }

}

export default Forced;
