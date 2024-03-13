export class Post {
  _title;
  _post;
  _user;
  _timestamp;

  constructor(title, post, user, timestamp) {
    this._title = title;
    this._post = post;
    this._user = user;
    this._timestamp = timestamp;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get post() {
    return this._post;
  }

  set post(value) {
    this._post = value;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  get timestamp() {
    return this._timestamp;
  }

  set timestamp(value) {
    this._timestamp = value;
  }
}
