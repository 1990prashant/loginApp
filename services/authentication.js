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
		this.handleAuth(newUser, cb);
	},

	login (email, password, cb) {
		const logUser = user.findByEmail(email, password);
		this.handleAuth(logUser, cb);
	},

	logout () {
		localStorage.removeItem('token');
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
