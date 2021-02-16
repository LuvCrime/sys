import 'normalize.css';
import "./App.scss";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.divToFocus = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="header">
            <div className="header-logo">
              <div className="logo"></div>
              <div className="company-name">
              <span className="bla">BLA BLA</span>
              <span className="subtitle">One Page Flat Template</span>
              </div>
            </div>
            <div className="navbar">
              <ul className="navbar-items">
                <li><a href="#" className="navbar-item-link">home</a></li>
                <li><a href="#" className="navbar-item-link">portfolio</a></li>
                <li><a href="#" className="navbar-item-link">about</a></li>
                <li><a href="#" className="navbar-item-link">contact</a></li>
              </ul>
            </div>
          </div>
          <div className="brand"></div>
          <div className="portfolio"></div>
          <div className="about-us"></div>
          <div className="contacts"></div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
