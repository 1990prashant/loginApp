import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import authentication from '../services/authentication'

class App extends React.Component {
  loggedIn () {
    return (
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/logout">
          <li>Log out</li>
        </Link>
      </ul>
    );
  }

  notLoggedIn () {
    return (
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
    );
  }

  render() {
    return (
      <div id="container">
        <div id="nav">
          {authentication.isAuthenticated() ? this.loggedIn() : this.notLoggedIn()}
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;