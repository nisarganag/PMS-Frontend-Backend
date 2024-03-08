<<<<<<< HEAD
=======
import { Component } from 'react';
import "./MainPage.css";
class MainPage extends Component {
    constructor(props: object | Readonly<object>) {
        super(props);
        this.state = {
            // state
        };
    }
  render() {
    return (
      <div className='mainPage_component'>
        <div className="mainPage_selector"></div>
        <div className="mainPage_searchBox">
          <input type="text" placeholder='Search'/>
        </div>
        <div className="mainPage_searchButton"></div>
      </div>
    );
  }
}
export default MainPage;
>>>>>>> 0a21ee34ac06e307ea67be3b59475667e15d90c8
