import React, { Component } from 'react';
import './bulma-0.6.1/css/bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import Background from './jason-briscoe-332508.jpg';
import Logo from './Logo.png';
import Gif from './createfilter.gif';

var sectionStyle = {
  background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + Background + ")",
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <section className="hero is-large is-primary" style={ sectionStyle }>
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a class="navbar-item">
                    
                  </a>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <span className="navbar-item">
                      
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="title is-spaced">
                <img src={Logo} alt="Logo"/>
              </div>
              <div className="subtitle">
                <a className="button is-dark is-inverted" href="https://github.com/Mckillagin685/RentFinder">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="level"></section>
        <section className="level"></section>
        <section className="level"></section>

        <section className="level">
          <div className="level-item">
            <div className="notification">
              <p className="title is-spaced">
                Slack integragtion
              </p>
              <p className="subtitle">
                Using Slack's messaging API
              </p>
              <p className="subtitle">
                we are able to give you quick
              </p>
              <p className="subtitle">
                and easy access to Slack-Pads
              </p>
            </div>
          </div>
          <div className="level-item">
          <div className="notification notification-padding">
            <p className="title is-spaced">
              Notifications
            </p>
            <p className="subtitle">
              When new results are found
            </p>
            <p className="subtitle">
              choose to be notifed through
            </p>
            <p className="subtitle">
              Slack by rent-bot
            </p>
          </div>
        </div>
        <div className="level-item">
            <div className="notification">
              <p className="title is-spaced">
                Custom search
              </p>
              <p className="subtitle">
                Customize your rental
              </p>
              <p className="subtitle">
                search with our quick
              </p>
              <p className="subtitle">
                easy message prompts
              </p>
            </div>
          </div>
        </section>

        <section className="level"></section>
        <section className="level"></section>
        <section className="level"></section>

        <section className="columns">
          <div className="column"></div>
          <div className="column is-half">
            <img src={Gif} alt="gif"/>
          </div>
          <div className="column"></div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="content has-centered-text">
              <p>
                <strong>Slack-Pads</strong> by Lucas Kirsch. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
