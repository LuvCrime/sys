import "normalize.css";
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
                <li>
                  <a href="#" className="navbar-item-link">
                    home
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-item-link">
                    portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-item-link">
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-item-link">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="brand">
            <div className="brand-items">
              <div className="brand-tagline">
                We Build <span className="weight-font">Brand</span>
              </div>
              <div className="lorem">Lorem</div>
              <div className="link-learn-more">learn more</div>
              <div className="bottom-button"></div>
            </div>
          </div>
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
