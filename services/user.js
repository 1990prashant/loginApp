var usersList = [{email: "abc@gmail.com", password: "123456", token: "123first"}, {email: "def@gmail.com", password: "987654", token: "123second"}];
const user = {
	
	findByEmail (email, password) {
		console.log(usersList)
		for (var i = 0; i < usersList.length; i++) {
			console.log(usersList[i].email);
			if (usersList[i].email == email && usersList[i].password == password) {
				return usersList[i]
			}
		}
	},

	findByToken (token) {
		for (var i = 0; i < usersList.length; i++) {
			console.log(usersList[i].email);
			if (usersList[i].token == token) {
				return usersList[i]
			}
		}
	},

	addUser (email, password, password_confirmation) {
		console.log(usersList);
		const userData = {email: email, password: password, token: "123random"}
		usersList.push(userData);
		console.log(userData);
		console.log(usersList);
		return userData;
	}
}

export default user