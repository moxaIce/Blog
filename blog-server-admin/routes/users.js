const router = require('koa-router')();
const {SuccessModel, ErrorModel} = require('../model/resModel');

router.prefix('/users')

router.post('/login', async function  (ctx, next) {
  const { userName, userPassword } = ctx.request.body;

  if (userName === 'admin' && userPassword === '123456') {
    ctx.body = new SuccessModel(true)
    return
  }

  ctx.body = new ErrorModel(null, '用户名或者密码错误')
})
module.exports = router
