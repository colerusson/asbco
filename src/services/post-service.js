const { dbQuery } = require("../db-access.js");

module.exports.writePostService = function (
    username,
    postTitle,
    postText,
    successCallback,
    failCallback
  ) {
    //creating a MySQL qury for the database
    query = "INSERT INTO post (username, title, post_text) VALUES ('" + username + "', '" + postTitle + "', '"+ postText + "');";
    //call the db-access.js function that will connect to the database and run the query
    dbQuery(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        failCallback();
      } else {
        successCallback();
      }
      
    });
  };


  module.exports.getPostService = function (
    postID,
    successCallback,
    failCallback
  ) {
    query = "select * from post where post_id = " + postID + ";";
    dbQuery(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        failCallback();
      } else {
        successCallback(result);
      }
      
    });
  };

  //get all posts for user