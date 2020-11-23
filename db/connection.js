'use strict';

const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Meadows2020!@#",
    database: "kdc_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log ("Connection Successful")
});

connection.query = util.promisify(connection.query);

module.exports = connection;