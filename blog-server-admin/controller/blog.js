const {exec} = require('../db/mysql');
const xss = require('xss');
const createBlog = async (blogData) => {
    const title = xss(blogData.title);
    const content = xss(blogData.content);
    const createTime = Date.now();

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', ${createTime}, '${blogData.author}');
    `
    const insertData = await exec(sql);

    return {
        id: insertData.insertId
    };
}

module.exports = {
    createBlog
}