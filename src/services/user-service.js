const { dbQuery } = require('../db-access.js');

module.exports.loginService = function(username, password, successCallback, failCallback){
    //creating a MySQL qury for the database 
    query = "select pass_word from user where username = '" + username + "';";

    //call the db-access.js function that will connect to the database and run the query
    dbQuery(query, (err, result, fields) => {
        if(err){
            return console.log(err);
        }
        //the result is an object so then you get the variable you wanted
        pw = result[0].pass_word;
        console.log(pw);
        if(password === pw){
            successCallback();
        } else {
            failCallback();
        }
    })

}