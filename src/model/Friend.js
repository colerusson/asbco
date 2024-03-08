export class Friend {
  _user;
  _friend;

  constructor(user, friend) {
    this._user = user;
    this._friend = friend;
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  get friend() {
    return this._friend;
  }

  set friend(friend) {
    this._friend = friend;
  }
}
