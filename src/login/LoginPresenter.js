import UserService from "../services/user-service";

export default class LoginPresenter {
  constructor() {
    this.service = new UserService();
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

  login(username, password) {
    console.log(username);
    console.log(password);

    this.service.login(
      username,
      password,
      () => {
        console.log("Login success");
      },
      () => {
        console.log("Login fail");
      }
    );
  }
}
