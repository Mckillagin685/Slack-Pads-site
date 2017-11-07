import React, { Component } from 'react';
import './bulma-0.6.1/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="level navbar">
          <h1 className="level-item has-text-centered">Welcome</h1>
        </header>
        <body className="columns">
          <div class="column is-black">Auto</div>
          <div className="container column is-three-quarters has-text-centered">
            Something here
          </div>
          <div class="column">Auto</div>
        </body>
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
