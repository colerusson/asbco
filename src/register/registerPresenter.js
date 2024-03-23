import UserService from "../services/user-service";

export default class RegisterPresenter {
  constructor() {
    this.service = new UserService();
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

	async register(username, password, bio, picture, firstName="First Name", lastName="Last Name") {
		await this.service.register(
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
