
// const { registerService } = require('../services/user-service.js');


export default class RegisterPresenter {
	setView(view) {
		this.view = view;
	}

	register(username, password, bio, picture) {
		console.log(username)
		console.log(password)
		console.log(bio)
		console.log(picture)
		// registerService(username, password, bio, picture, () => {
		// 	console.log("Register success");
		// 	// TODO: change authstate
		// }, () => {
		// 	console.log("Register fail");
		// 	// TODO: alert user
		// })
	}
}