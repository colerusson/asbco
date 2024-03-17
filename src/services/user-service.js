const { makeQuery } = require("./utils/queryHelper.js");

export default class UserService {
  async login(username, password, successCallback, failCallback) {
    const query = `SELECT pass_word FROM user WHERE username = '${username}';`;

    const result = await makeQuery(query);

    if (result.length === 0) {
      return false;
    }

    if (result[0].pass_word === password) {
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

// module.exports.loginService = function (
//   username,
//   password,
//   successCallback,
//   failCallback
// ) {
//   //creating a MySQL qury for the database
//   query = "select pass_word from user where username = '" + username + "';";

//   //call the db-access.js function that will connect to the database and run the query
//   dbQuery(query, (err, result, fields) => {
//     if (err) {
//       return console.log(err);
//     }
//     //the result is an object so then you get the variable you wanted
//     pw = result[0].pass_word;
//     console.log(pw);
//     if (password === pw) {
//       successCallback();
//     } else {
//       failCallback();
//     }
//   });
// };

// module.exports.registerService = async function (
//   firstname,
//   lastname,
//   username,
//   password,
//   profile_pic,
//   successCallback,
//   failCallback
// ) {
//   // Validate username is unique
//   const userValidQuery =
//     "SELECT username FROM user WHERE username = '" + username + "';";

//   dbQuery(userValidQuery, (err, result, fields) => {
//     if (err) {
//       return console.log(err);
//     }
//     if (result.length > 0) {
//       failCallback(); // Username is not unique
//     } else {
//       // If username is unique, proceed with insertion
//       if (profile_pic === "") {
//         profile_pic =
//           "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png";
//       }

//       const insertionQuery = `INSERT INTO user (first_name, last_name, username, pass_word, profile_pic) VALUES
//                     ('${firstname}', '${lastname}', '${username}', '${password}', '${profile_pic}');`;

//       // Call the db-access.js function to insert user into the database
//       dbQuery(insertionQuery, (err, result, fields) => {
//         if (err) {
//           return console.log(err);
//         }
//         successCallback(); // User inserted successfully
//       });
//     }
//   });
// };
