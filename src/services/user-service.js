const { makeQuery } = require("./utils/queryHelper.js");

export default class UserService {
  async login(username, password, successCallback, failCallback) {
    const query = `SELECT pass_word FROM user WHERE username = '${username}';`;

    const result = await makeQuery(query);

    if (result.length > 0 && result[0].pass_word === password) {
      successCallback();
    } else {
      failCallback();
    }
  }

  async register(
    firstname,
    lastname,
    username,
    password,
    profile_pic,
    successCallback,
    failCallback
  ) {
    const userValidQuery = `SELECT username FROM user WHERE username = '${username}';`;

    const result = await makeQuery(userValidQuery);

    if (result.length > 0) {
      return false;
    }

    if (profile_pic === "") {
      profile_pic =
        "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png";
    }

    const insertionQuery = `INSERT INTO user (first_name, last_name, username, pass_word, profile_pic) VALUES 
                    ('${firstname}', '${lastname}', '${username}', '${password}', '${profile_pic}');`;

    await makeQuery(insertionQuery);

    successCallback(); // TODO: Gage: add error handling later
  }
}
