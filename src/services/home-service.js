const { makeQuery } = require("./utils/queryHelper.js");

export default class HomeService {
  async getUserInfo(username) {
    const query = `SELECT * FROM user WHERE username = ${username};`;

    return await makeQuery(query);
  }

  async getUserPosts(username) {
    const query = `SELECT * FROM post WHERE username = ${username};`;

    return await makeQuery(query);
  }

  async updateUserInfo(username, firstname, lastname, profile_pic) {
    let query = `UPDATE user SET first_name = ${firstname}, last_name = ${lastname}, profile_pic = ${profile_pic} WHERE username = ${username};`;

    return await makeQuery(query);
  }
}
