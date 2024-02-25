//this is just a function that accesses the database.
//see loginService function in user-service.js for example on how to use it
module.exports.dbQuery = function (query, callbackFun) {
  require("dotenv").config();
  const mysql = require("mysql2");

  const connection = mysql.createConnection({
    host: "aws.connect.psdb.cloud",
    user: "rjx2sj489iy3o23cqij5",
    password: "pscale_pw_Euy9O0ndzrxhSCxEjBUN1vKntmS4nj1OJFknQQDk2Ri",
    database: "anti-scroll",
    ssl: {
      rejectUnauthorized: true,
    },
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to PlanetScale:", err.stack);
      return;
    }
    console.log("Connected to PlanetScale!");
  });

  connection.query(query, callbackFun);

  connection.end();
};

//old user: 8dcngiudddi3agjoi0yt
//old password: pscale_pw_3XPo5faCkM1lpv4LcNpGhDTJoW2ml1R2KBks7igih0c
