
const { registerService } = require('../services/user-service.js');


export default class RegisterPresenter {
	setView(view) {
		this.view = view;
	}

	async register(username, password, bio, picture, firstName="First Name", lastName="Last Name") {
		await registerService(
			firstName,
			lastName,
			username,
			password,
			picture,
		() => {
			console.log("User registered successfully");
		},
		() => {
			console.log("User already exists");
		}
		);
	}
}