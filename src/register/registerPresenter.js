import UserService from "../services/user-service";

export default class RegisterPresenter {
  constructor() {
    this.service = new UserService();
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

  async register(username, password, bio, picture) {
    console.log(username);
    console.log(password);
    console.log(bio);
    console.log(picture);

    await this.service.register(
      username,
      password,
      bio,
      picture,
      () => {
        console.log("Register success");
        // TODO: change authstate
      },
      () => {
        console.log("Register fail");
        // TODO: alert user
      }
    );
  }
}
