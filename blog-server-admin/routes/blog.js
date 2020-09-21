const router = require('koa-router')();
const { SuccessModel , ErrorModel } = require('../model/resModel');
const { createBlog } = require('../controller/blog')
router.prefix('/blogs')

// 新建日志
router.post('/createBlog', async function (ctx, next) {
    const { title, content, author} = ctx.request.body;

    const row = await createBlog({title, content, author});

    if (row.id) {
        ctx.body = new SuccessModel(row);
        return;
    }
    ctx.body = new ErrorModel(false, '写入数据库失败')
})

module.exports = router;