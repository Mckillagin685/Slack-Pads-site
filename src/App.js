import React, { Component } from 'react';
import './bulma-0.6.1/css/bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import Background from './jason-briscoe-332508.jpg';
import Logo from './Logo.png';

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
                <a className="button is-dark is-inverted">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="level"></div>

        <section className="level">
          <div className="level-item">
            <div className="notification">
              <p className="title is-spaced">
                Title
              </p>
              <p className="subtitle">
                Subtitle
              </p>
            </div>
          </div>
          <div className="level-item">
          <div className="notification">
            <p className="title is-spaced">
              Title
            </p>
            <p className="subtitle">
              Subtitle
            </p>
          </div>
        </div>
        <div className="level-item">
            <div className="notification">
              <p className="title is-spaced">
                Title
              </p>
              <p className="subtitle">
                Subtitle
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="content has-centered-text">
              <p>
                <strong>Rent-bot</strong> by Lucas Kirsch. The source code is licensed
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
