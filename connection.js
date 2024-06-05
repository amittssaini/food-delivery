const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "system",
    database: "food_delivery"
    // port: 3308
});

connection.connect(function (error) {
    if (error) {
        console.log(error.message);
        return false;
    }
    // console.log("Database Connection Created http://localhost:5000");
});
module.exports = connection;