const { loginService } = require('../services/user-service.js');

export default class LoginPresenter {
	setView(view) {
		this.view = view;
	}

	async login(username, password) {
		console.log(username)

		await loginService(username, password,
			() => {
				console.log("User login successfully");
				window.location.href = '/home'
			},
			() => {
				console.log("User login failed");
			}
		);
	}
}
