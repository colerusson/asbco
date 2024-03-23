const { dbQuery } = require("./db-access.js");

//run this file to print the whole database

async function showDatabase() {
  const userTable = "select * from user;";
  const friendsTable = "select * from friends;";
  const postsTable = "select * from post;";

  const userResult = await dbQuery(userTable);
  console.log("Showing user table: ");
  console.log(userResult);

  const friendsResult = await dbQuery(friendsTable);
  console.log("Showing friends table:");
  console.log(friendsResult);

  const postsResult = await dbQuery(postsTable);
  console.log("Showing posts table:");
  console.log(postsResult);
}

showDatabase().catch((err) => {
  console.error(err);
});
