const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../config/db');

console.log(`MYSQL_CONFIG is`, MYSQL_CONFIG)
const connection = mysql.createConnection(MYSQL_CONFIG);

connection.connect();

const exec = function (sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result)
        })
    })
}

module.exports = {
    exec,
    escape: mysql.escape
}