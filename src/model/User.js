export class User {
  _username;
  _firstName;
  _lastName;
  _bio;
  _profilePicture;

  constructor(username, firstName, lastName, bio, profilePicture) {
    this._username = username;
    this._firstName = firstName;
    this._lastName = lastName;
    this._bio = bio;
    this._profilePicture = profilePicture;
  }

  get username() {
    return this._username;
  }

  set username(username) {
    this._username = username;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get bio() {
    return this._bio;
  }

  set bio(bio) {
    this._bio = bio;
  }

  get profilePicture() {
    return this._profilePicture;
  }

  set profilePicture(profilePicture) {
    this._profilePicture = profilePicture;
  }
}
