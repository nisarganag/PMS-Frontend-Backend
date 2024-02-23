import "./NavBar.css";
import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // state
        };
    }
  render() {
    return (
      <div className="navbar_component">
        <div className="navbar_logo"></div>
        <div className="navbar_profile"></div>
        <div className="navbar_publications"></div>
        <div className="navbar_login"></div>  
      </div>
    );
  }
}
export default NavBar;