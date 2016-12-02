import user from '../services/user.js'

const authentication = {

	isAuthenticated () {
		const token = localStorage.getItem('token');
		if (token) {
			return true;
		} else {
			return false;
		}
	},

	register (email, password, password_confirmation, cb) {
		const newUser = user.addUser(email, password, password_confirmation);
		console.log(newUser);
		this.handleAuth(newUser, cb);
		console.log(newUser);
	},

	login (email, password, cb) {
		console.log(email);
		const logUser = user.findByEmail(email, password);
		console.log(logUser);
		this.handleAuth(logUser, cb);
	},

	handleAuth (promise, cb) {
    if (promise) {
      if (promise.token) {
        localStorage.setItem('token', promise.token);
        cb(true);
      }
    } else {
      cb(false);
    }
  }
}

export default authentication
