const { dbQuery } = require('./db-access.js');

//run this file to print the whole database


userTable = "select * from user;";

dbQuery(userTable, (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    console.log("Showing user table: ")
    console.log(result);
})


friendsTable = "select * from friends;";
dbQuery(friendsTable, (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    console.log("Showing friends table:");
    console.log(result);
})


postsTable = "select * from post;";
dbQuery(postsTable, (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    console.log("Showing posts table:");
    console.log(result);
})