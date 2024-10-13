var mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sreenath@KU98'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("SELECT DATABASE myfirstdb", function(err,result) {
        console.log(result);
        // if (err) throw err;
    });
    // connection.query("CREATE DATABASE myfirstdb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
  });