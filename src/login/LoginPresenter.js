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
    console.log(password);

    await this.service.login(
      username,
      password,
      () => {
        console.log("Login success");
        // TODO: change authstate
      },
      () => {
        console.log("Login fail");
        // TODO: alert user
      }
    );
  }
}
