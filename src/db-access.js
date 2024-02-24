
//this is just a function that accesses the database. 
//see loginService function in user-service.js for example on how to use it
module.exports.dbQuery = function(query, callbackFun){


    require('dotenv').config();
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'svlkedeqlhd8ilm2m86b',
    password: 'pscale_pw_48LGn6D3GJGkuuIlygnDHoS3OfZsgqGnOMc8B0ImhLX',
    database: 'anti-scroll',
    ssl: {
        rejectUnauthorized: true
    }
    });

    connection.connect((err) => {
    if (err) {
        console.error('Error connecting to PlanetScale:', err.stack);
        return;
    }
    console.log('Connected to PlanetScale!');
    });

    connection.query(query, callbackFun)
    

    connection.end();

}
