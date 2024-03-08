import { v4 as uuid } from "uuid";

export class AuthToken {
  _token;
  _timestamp;

  Generate() {
    let token = AuthToken.generateToken();
    let timestamp = new Date.now();

    return new AuthToken(token, timestamp);
  }

  generateToken() {
    try {
      return uuid().toString();
    } catch (error) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < 64; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
  }

  constructor(token, timestamp) {
    this._token = token;
    this._timestamp = timestamp;
  }
}
