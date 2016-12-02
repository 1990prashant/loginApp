import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="nav">
          <ul>
          	<Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;