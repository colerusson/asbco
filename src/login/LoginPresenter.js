import UserService from "../services/user-service";

export default class LoginPresenter {
  constructor() {
    this.service = new UserService();
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

  async login(username, password) {
    console.log(username);

    await this.service.login(
      username,
      password,
      () => {
        console.log("User login successfully");
        window.location.href = "/home";
      },
      () => {
        console.log("User login failed");
      }
    );
  }
}
