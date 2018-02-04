import React from 'react';

class NavBar extends React.Component{

  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd; height: 40px;" >
          <a class="navbar-brand" href="#">Home</a>
          <a class="navbar-brand" href="#">About</a>
          <a class="navbar-brand" href="#">Link</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
