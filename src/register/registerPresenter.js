import UserService from "../services/user-service";

export default class RegisterPresenter {
  constructor() {
    this.service = new UserService();
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

	async register(firstName, lastName, username, password, picture) {
		await this.service.register(
			firstName,
			lastName,
			username,
			password,
			picture,
		() => {
			console.log("User registered successfully");
			window.location.href = '/home';
		},
		() => {
			console.log("Error registering user");
		}
		);
	}
}
