const env = process.env.NODE_ENV;

let MYSQL_CONFIG;

if (env === 'dev') {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: 'ab145471',
        port: '3306',
        database: 'MY_BLOG'
    }
}
module.exports = {
    MYSQL_CONFIG
};