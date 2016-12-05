import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router'
import App from './components/App.jsx';
import Home from './components/Home.jsx'
import Register from './components/Register.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Welcome from './components/Welcome.js'
import authentication from './services/authentication.js'

function checkLogin(nextState, replace) {
	if (authentication.isAuthenticated()) {
		replace({
			pathname: '/welcome'
		})
	} else {
		replace({
			pathname: '/login'
		})
	}
}

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} onEnter={checkLogin} />
      <Route path = "register" component = {Register} />
     	<Route path = "login" component = {Login} />
     	<Route path = "welcome" component = {Welcome} />
     	<Route path = "logout" component = {Logout} />
    </Route>
  </Router>	
), document.getElementById('app'))