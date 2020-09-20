/**
 * @description  用户相关
 */
const {exec, escape} = require('../db/mysql');

const login = async function (username, password) {
    const userName = escape(username);
    
    const sql = `
    select userName, realName from users where userName=${userName} and password=${password};
    ` 
    const rows = await exec(sql);
    return rows[0] || {}
}

module.exports = {
    login
}