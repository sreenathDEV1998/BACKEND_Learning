var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sreenath@KU98',
    database: 'myfirstdb'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'myfirstdb'", function (err, result) {
        if (err) {
            throw err;
        } else {
            if (result.length == 0) {
                connection.query("CREATE DATABASE myfirstdb", function (err, result) {
                    console.log("Database created");
                    if (err) throw err;
                });
            }
        }
    });
});